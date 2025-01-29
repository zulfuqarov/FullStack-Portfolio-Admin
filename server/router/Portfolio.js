import express from "express";
import { CheckToken } from "../middleware/CheckToken.js";

const router = express.Router();

router.use(CheckToken);

router.put("/:id", (req, res) => {
    
})

export default router;

