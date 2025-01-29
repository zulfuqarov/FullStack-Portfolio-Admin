import express from "express";
import { CheckToken } from "../middleware/CheckToken.js";

const router = express.Router();

router.use(CheckToken);

router.get("/", (req, res) => {
    res.send("portfolio")
})

export default router;

