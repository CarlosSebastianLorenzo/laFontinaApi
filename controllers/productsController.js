import Product from "../models/Product.js";
import Category from "../models/Category.js";

const productsController = {

    createOneProduct: async (req, res, next) => {
        try {
            let category = await Category.findOne({ title : req.body.category })
            req.body.category = category
            let product = await Product.create(req.body)
            res.status(201).json({ 
                message: "The new product has been successfully created",
                response: product
            })
        }
        catch (err) {
            next(err)
        }
    },

    createManyProducts: async (req, res, next) => {
        try {
            for (let i = 0; i < req.body.length; i++) {
                let category = await Category.findOne({ title : req.body[i].category })
                req.body[i].category = category
            }
            let products = await Product.insertMany(req.body)
            res.status(201).json({ 
                message: "The new products have been successfully created",
                response: products
            })
        } catch (err) {
            next(err)
        }
    },

    readAllProducts: async (req, res, next) => {
        try {
            let products = await Product.find().populate({
                path: 'category',
                select: 'title'
            })
            res.status(200).json({ response: products})
        } catch (err) {
            next(err)
        }
    },

    readAllProductsByCategory: async (req, res, next) => {
        try {
            let category = await Category.findOne({ title : req.params.category })
            let products = await Product.find( { category: category._id} ).populate({
                path: 'category',
                select: 'title'
            })
            res.status(200).json({ response: products})
        } catch (err) {
            next(err)
        }
    },

    readOneProductById: async (req, res, next) => {
        try {
            let product = await Product.findById(req.params.id)
            res.status(200).json({ response: product})
        } catch (err) {
            next(err)
        }
    },

    readOneProductByName: async (req, res, next) => {
        try {
            let product = await Product.findOne({ product : req.params.product })
            res.status(200).json({ response: product })
        } catch (err) {
            next(err)
        }
    },

    updateOneProduct: async (req, res, next) => {
        try {
            let product = await Product.findByIdAndUpdate(req.body._id, req.body, {new: true})
            res.status(200).json({ 
                message: "The product has been successfully updated",
                response: product
            })
        } catch (err) {
            next(err)
        }
    },

    updateManyProducts: async (req, res, next) => {
        try {

            let products = req.body
            let newProducts = [];
            for (let i=0; i<products.length; i++) {
                let newProduct = await Product.findByIdAndUpdate(products[i]._id, products[i], {new: true})
                newProducts.push(newProduct)
            }

            res.status(200).json({ 
                message: "The new products have been successfully updated",
                response: products
            })
        } catch (err) {
            next(err)
        }
    },

    deleteOneProduct: async (req, res, next) => {
        try {
            await Product.findByIdAndDelete(req.body._id)
            res.status(200).json({ 
                message: 'resource deleted successfully',
                response: 'resource deleted successfully'
            })
        } catch (err) {
            next(err)
        }
    },

    deleteManyProducts: async (req, res, next) => {
        try {

            let products = req.body
            for (let i=0; i<products.length; i++) {
                await Product.findByIdAndDelete(products[i]._id)
            }

            res.status(200).json({ 
                message: 'resources deleted successfully',
                response: 'resources deleted successfully'
            })
        } catch (err) {
            next(err)
        }
    }
}

export default productsController;