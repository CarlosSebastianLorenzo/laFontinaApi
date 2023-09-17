import { Router } from "express";
import productsController from "../controllers/productsController.js";
import productSchema from "../validators/productValidator.js";
import validator from "../middlewares/validator.js";
import isAlreadyExists from "../middlewares/isAlredyExists.js";
import passport from "../middlewares/passport.js";
import Product from "../models/Product.js";

const { createOneProduct,
        createManyProducts,
        readAllProducts,
        readAllProductsByCategory,
        readOneProductById,
        readOneProductByName,
        updateOneProduct,
        updateManyProducts,
        deleteOneProduct,
        deleteManyProducts } = productsController;

const productsRouter = Router();

productsRouter.post('/', passport.authenticate( 'jwt', {session:false} ), validator(productSchema),
    isAlreadyExists(Product, title, title), createOneProduct);

productsRouter.post('/many/', passport.authenticate( 'jwt', {session:false} ), validator(productSchema), createManyProducts);

productsRouter.get('/', readAllProducts)
productsRouter.get('/:category', readAllProductsByCategory)
productsRouter.get('/id/:id', readOneProductById)
productsRouter.get('/name/:name', readOneProductByName)

productsRouter.put('/', passport.authenticate( 'jwt', {session:false} ), updateOneProduct)
productsRouter.put('/many/', passport.authenticate( 'jwt', {session:false} ), updateManyProducts)

productsRouter.delete('/', passport.authenticate( 'jwt', {session:false} ), deleteOneProduct)
productsRouter.delete('/many/', passport.authenticate( 'jwt', {session:false} ), deleteManyProducts)

export default productsRouter;