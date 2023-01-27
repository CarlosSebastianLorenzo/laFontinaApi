import Category from "../models/Category.js";

const categoriesController = {

    createOneCategory: async (req, res, next) => {
        try {
            let category = await Category.create(req.body)
            res.status(201).json({ 
                message: "The new category has been successfully created",
                response: category
            })
        }
        catch (err) {
            next(err)
        }
    },

    createManyCategories: async (req, res, next) => {
        try {
            let categories = await Category.insertMany(req.body)
            res.status(201).json({ 
                message: "The new categories have been successfully created",
                response: categories
            })
        } catch (err) {
            next(err)
        }
    },

    readAllCategories: async (req, res, next) => {
        try {
            let categories = await Category.find()
            res.status(200).json({ response: categories})
        } catch (err) {
            next(err)
        }
    },

    readOneCategoryById: async (req, res, next) => {
        try {
            let category = await Category.findById(req.params.id)
            res.status(200).json({ response: category})
        } catch (err) {
            next(err)
        }
    },

    readOneCategoryByName: async (req, res, next) => {
        try {
            let category = await Category.findOne({ category : req.params.category })
            res.status(200).json({ response: category })
        } catch (err) {
            next(err)
        }
    },

    updateOneCategory: async (req, res, next) => {
        try {
            let category = await Category.findByIdAndUpdate(req.body._id, req.body, {new: true})
            res.status(200).json({ 
                message: "The category has been successfully updated",
                response: category
            })
        } catch (err) {
            next(err)
        }
    },

    updateManyCategories: async (req, res, next) => {
        try {
                let categories = req.body
                let newCategories = [];
                for (let i=0; i<categories.length; i++) {
                    let newCategory = await Category.findByIdAndUpdate(categories[i]._id, categories[i], {new: true})
                    newCategories.push(newCategory)
                }

            res.status(200).json({ 
                message: "The new categories have been successfully updated",
                response: newCategories
            })
        } catch (err) {
            next(err)
        }
    },

    deleteOneCategory: async (req, res, next) => {
        try {
            await Category.findByIdAndDelete(req.body._id)
            res.status(200).json({ 
                message: 'resource deleted successfully',
                response: 'resource deleted successfully'
            })
        } catch (err) {
            next(err)
        }
    },

    deleteManyCategories: async (req, res, next) => {
        try {
            let categories = req.body
                let newCategories = [];
                for (let i=0; i<categories.length; i++) {
                    let newCategory = await Category.findByIdAndDelete(categories[i]._id)
                    newCategories.push(newCategory)
                }
            res.status(200).json({ 
                message: 'resource deleted successfully',
                response: 'resources deleted successfully'
            })
        } catch (err) {
            next(err)
        }
    }
}

export default categoriesController;