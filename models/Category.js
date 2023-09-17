import {Schema, model} from "mongoose";

const categorySchema = Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String},
    photo: {type: String}
},{
    timestamps: true
})

const Category = model('categories', categorySchema);

export default Category;