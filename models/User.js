import { Schema, model } from "mongoose";

const userSchema = Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    photo: {type: String},
    birth_date: { type: String},
    verified: { type: Boolean, default: false},
    author: {type: Boolean, default: false},
    country: {type: String}
},{
    timestamps: true
})

const User = model('users', userSchema);

export default User;