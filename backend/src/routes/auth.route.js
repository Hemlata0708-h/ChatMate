import express from "express";
import mongoose from "mongoose";
import { login, logout, signup, onboard } from "../controllers/auth.controller.js";
import { proctectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", proctectRoute, onboard);

//forgot password

//check if user is logged in
router.get("/me", proctectRoute, (req, res)=>{
    res.status(200).json({success: true, user: req.user})
});

export default router;
