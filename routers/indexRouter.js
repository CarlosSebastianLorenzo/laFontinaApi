import { Router } from "express";
import userRouter from "./userRouter.js";

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.send('Go to '+process.env['PORT']+process.env['apiURL']+' for routes and documentation');
})

indexRouter.use('/user', userRouter)

export default indexRouter;