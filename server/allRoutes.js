import express from "express";
import user from "./router/User.js";
import portfolio from "./router/Portfolio.js";
const router = express.Router();

router.use("/user", user);
router.use("/portfolio", portfolio);

export default router;

