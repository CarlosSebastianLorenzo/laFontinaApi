import { Schema, model } from "mongoose";

const userSchema = Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    photo: {type: String, default: "https://e7.pngegg.com/pngimages/518/320/png-clipart-computer-icons-mobile-app-development-android-my-account-icon-blue-text.png"}
},{
    timestamps: true
})

const User = model('users', userSchema);

export default User;