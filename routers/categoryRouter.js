import { Router } from "express";
import categoriesController from "../controllers/categoriesController.js";
import categorySchema from "../validators/categoryValidator.js";
import validator from "../middlewares/validator.js";
import isAlreadyExists from "../middlewares/isAlredyExists.js";
import passport from "../middlewares/passport.js";
import Category from "../models/Category.js";

const { createOneCategory,
        createManyCategories,
        readAllCategories,
        readOneCategoryById,
        readOneCategoryByName,
        updateOneCategory,
        updateManyCategories,
        deleteOneCategory,
        deleteManyCategories } = categoriesController;

const categoriesRouter = Router();

categoriesRouter.post('/', passport.authenticate( 'jwt', {session:false} ), validator(categorySchema),
    isAlreadyExists(Category, "title", "title"), createOneCategory);

categoriesRouter.post('/many', passport.authenticate( 'jwt', {session:false} ), createManyCategories);

categoriesRouter.get('/', readAllCategories)
categoriesRouter.get('/id/:id', readOneCategoryById)
categoriesRouter.get('/name/:name', readOneCategoryByName)

categoriesRouter.put('/', passport.authenticate( 'jwt', {session:false} ), updateOneCategory)
categoriesRouter.put('/many', passport.authenticate( 'jwt', {session:false} ), updateManyCategories)

categoriesRouter.delete('/', passport.authenticate( 'jwt', {session:false} ), deleteOneCategory)
categoriesRouter.delete('/many', passport.authenticate( 'jwt', {session:false} ), deleteManyCategories)

export default categoriesRouter;