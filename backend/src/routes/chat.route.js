import express from "express";
import { proctectRoute } from "../middleware/auth.middleware.js";
import { getStreamToken } from "../controllers/chat.controller.js";


const router = express.Router();

router.get("/token", proctectRoute, getStreamToken);

export  default router;

