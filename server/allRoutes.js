import express from "express";
import user from "./router/User.js";
import portfolio from "./router/Portfolio.js";
import email from "./router/Email.js"

const router = express.Router();

router.use("/user", user);
router.use("/portfolio", portfolio);
router.use("/email", email);

export default router;

