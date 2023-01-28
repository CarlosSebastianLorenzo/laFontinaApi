import { Router } from "express";
import userController from "../controllers/userController.js";
import { signUpSchema, signInSchema } from "../validators/signUpValidator.js";
import validator from "../middlewares/validator.js";
import emailAlreadyExists from "../middlewares/emailAlredyExists.js";
import passport from "../middlewares/passport.js";

const { signUp, signIn, loginWithToken } = userController;

const userRouter = Router();

userRouter.post('/signUp', validator(signUpSchema), emailAlreadyExists, signUp);
userRouter.post('/signIn', validator(signInSchema), signIn);
userRouter.get('/token', passport.authenticate( 'jwt', {session:false} ), loginWithToken);


export default userRouter;