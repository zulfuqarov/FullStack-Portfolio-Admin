import express from "express";
import User from "../model/userModel.js";
import portfolio from "../model/portfolioModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CheckToken } from "../middleware/CheckToken.js";

const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const { firstname, lastname, email, password, position } = req.body

        if (!firstname || !lastname || !email || !password || !position) {
            return res.status(400).json({ msg: "All fields are required" })
        }

        const userEmail = await User.findOne({ email })
        const userName = await User.findOne({ firstname })
        if (userEmail) {
            return res.status(400).json({ msg: "Email already exists" })
        }
        if (userName) {
            return res.status(400).json({ msg: "Username already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            position
        })

        await newUser.save()

        res.status(200).json({ msg: "User registered successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server error" })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {

        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are required" })
        }

        const user = await User.findOne({ email }).populate("portfolio")
        if (!user) {
            return res.status(400).json({ msg: "Username or password is incorrect" });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ msg: "Username or password is incorrect" });
        }

        const payload = {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            position: user.position
        }

        const token = jwt.sign(payload, process.env.TOKEN_SECRET_CODE, {
            expiresIn: "3d",
        });
        res.cookie("jwtToken", token, {
            // httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        const findPortfolio = await portfolio.findOne({
            userId: user._id,
        })

        if (!findPortfolio) {
            const newPortfolio = new portfolio({
                firstname: user.firstname,
                lastname: user.lastname,
                position: user.position,
                getportfolio: `${user.firstname}${user.lastname}`,
                userId: user._id,
                contact: {
                    email: user.email,
                }
            })
            await newPortfolio.save()

            await User.findByIdAndUpdate(user._id, { portfolio: newPortfolio._id })

            return res.status(200).json({ msg: "Portfolio created successfully and logged in", portfolio: newPortfolio });
        }

        return res.status(200).json({ msg: "Logged in successfully", portfolio: user.portfolio });

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server error" })
    }
})

router.post("/logout", async (req, res) => {
    const token = req.cookies.jwtToken;

    try {
        if (!token) {
            res.status(400).json({ message: "profile not sigin" });
            return;
        }
        res.clearCookie("jwtToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });

        res.status(200).json({ message: "Profile logged out successfully" });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.use(CheckToken)
router.get("/", async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("portfolio")
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json(user.portfolio)

    } catch (error) {
        console.log(error)
    }
})
router.delete("/delete", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);  // _id'siyle silme işlemi

        await portfolio.findOneAndDelete({
            userId: req.user.id,
        })

        res.clearCookie("jwtToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
        res.status(200).json({ msg: "Profile deleted successfully." })

    } catch (error) {
        console.log(error)
    }
})

export default router;

