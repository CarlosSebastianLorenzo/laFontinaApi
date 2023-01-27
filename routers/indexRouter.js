import { Router } from "express";
import userRouter from "./userRouter.js";
import productsRouter from "./productsRouter.js";
import categoriesRouter from "./categoryRouter.js";

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.send('Go to '+process.env['apiURL']+process.env['PORT']+' for routes and documentation');
})

indexRouter.use('/user', userRouter)
indexRouter.use('/products', productsRouter)
indexRouter.use('/categories', categoriesRouter)

export default indexRouter;