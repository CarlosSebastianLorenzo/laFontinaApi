import joi from 'joi';
import joiPassword from 'joi-password-complexity'

const complexityOptions = {
    min: 8,
    max: 26,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4
};

export const signUpSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty" : "The field email cannot be empty.",
        "any.required" : "The email is required",
        "string.email" : "Invalid email address. Please enter a valid email."
    }),
    password: joiPassword(complexityOptions).required(),
    fullName: joi.string().required().min(3).max(30).messages({
        "string.min" : "Name is too short. Please enter at least 4 characters.",
        "any.required" : "The name is required",
        "string.max" : "Name is too long. Please limit to 30 characters."
    }),
    photo: joi.string().uri()
})

export const signInSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty" : "The field email cannot be empty.",
        "any.required" : "The email is required",
        "string.email" : "Invalid email address. Please enter a valid email."
    }),
    password: joiPassword(complexityOptions).required()
})