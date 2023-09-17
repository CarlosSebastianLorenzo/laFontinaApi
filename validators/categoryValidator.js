import joi from 'joi';

const categorySchema = joi.object({
    title: joi.string().required().messages({
        "string.empty" : "The field Title cannot be empty.",
        "any.required" : "The Title is required"
    }),
    description: joi.string().required().min(3).max(500).messages({
        "string.min" : "Description is too short. Please enter at least 4 characters.",
        "any.required" : "The Description is required",
        "string.max" : "Description is too long. Please limit to 500 characters."
    }),
    photo: joi.string().uri().required().messages({
        "string.empty" : "The field Photo cannot be empty.",
        "any.required" : "The Photo is required",
        "string.uri" : "Invalid Photo link. Please enter a valid link."
    })
})

export default categorySchema