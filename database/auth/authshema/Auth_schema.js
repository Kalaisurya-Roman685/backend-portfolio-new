import mongoose from "mongoose";

const Authschema = new mongoose.Schema({
    username: {
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
    image: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });


export default mongoose.model("users", Authschema);