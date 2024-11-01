import express from "express";
import { controllers as authControllers } from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/verifyToken.middlewares.js";

const authRouter = express.Router();

authRouter.post("/sign-up", authControllers.signUp);
authRouter.post("/log-in", authControllers.logIn);
authRouter.post("/verify-otp", verifyToken, authControllers.verifyOTP);
// authRouter.post("/verify-pass", verifyToken, authControllers.verifyPass);
authRouter.post("/reset-password", verifyToken, authControllers.resetPassword);
authRouter.post("/forgot-password", authControllers.forgotPassword);
authRouter.post("/set-new-password", verifyToken, authControllers.setNewPassword);
// authRouter.post("/change-email", verifyToken, authControllers.changeEmail);

export default authRouter;
