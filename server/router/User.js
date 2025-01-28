import express from "express";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("user")
})

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

        const user = await User.findOne({ email })
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

        res.status(200).json({ msg: "Login successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server error" })
    }
})

// router.post("/logout", async (req, res) => {
//     const token = req.cookies.jwtToken;

//     try {
//         if (!token) {
//             res.status(400).json({ message: "profile not sigin" });
//             return;
//         }
//         res.clearCookie("jwtToken", {
//             httpOnly: true,
//             secure: true,
//             sameSite: "strict",
//         });

        

//         res.status(200).json({ message: "Logout successfully" });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });
export default router;

