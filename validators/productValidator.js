import joi from 'joi';

const productSchema = joi.object({
    title: joi.string().required().messages({
        "string.empty" : "The field Title cannot be empty.",
        "any.required" : "The Title is required"
    }),
    photo: joi.string().uri().required().messages({
        "string.empty" : "The field Photo cannot be empty.",
        "any.required" : "The Photo is required",
        "string.uri" : "Invalid Photo link. Please enter a valid link."
    }),
    description: joi.string().required().min(3).max(500).messages({
        "string.min" : "Description is too short. Please enter at least 4 characters.",
        "any.required" : "The Description is required",
        "string.max" : "Description is too long. Please limit to 500 characters."
    }),
    price: joi.number().required().min(0).max(9999999).messages({
        "number.min" : "The Price cannot be negative.",
        "any.required" : "The Price is required",
        "number.max" : "The price cannot exceed $9.999.999"
    }),
    category : joi.string().required().min(0).max(24).messages({
        "string.empty" : "The field Category cannot be empty.",
        "any.required" : "The Category is required",
        "string.max" : "The Category is longer than 24 characters.",
        "string.min" : "The Category must be 1 character."
    }),
    class : joi.string().max(50).messages({
        "string.empty" : "The field Class cannot be empty.",
        "string.max" : "Class is too long. Please limit to 50 characters."
    })
})

export default productSchema