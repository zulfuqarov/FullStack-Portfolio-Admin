import jwt from "jsonwebtoken";

const CheckToken = async (req, res, next) => {
    const token = req.cookies.jwtToken;
    
    if (!token) {
        res.status(403).json({ message: "Token not provided" });
        return;
    }

    try {
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET_CODE);
        req.user = verifyToken;
        next();
    } catch (error) {

        if (error.name === "TokenExpiredError") {
            res.clearCookie("jwtToken", {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
            });
            res.status(403).json({ message: "Token expired" });
            return
        }

        res.clearCookie("jwtToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
        res.status(403).json({ message: "Internal Server Error" });

        console.log(error)

    }

}

export { CheckToken };