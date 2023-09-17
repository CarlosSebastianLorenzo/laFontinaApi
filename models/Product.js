import {Schema, model} from "mongoose";

const productSchema = Schema({
    title: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    description:{type: String, required: true},
    price: {type: Number, required: true,},
    category: {type: Schema.ObjectId, ref:'categories', required: true}
},{
    timestamps: true
})

const Product = model('products', productSchema);

export default Product;