import mongoose from "mongoose";

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileimage: {
        type: String
    },
    dob: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

export default mongoose.model("users", Users);