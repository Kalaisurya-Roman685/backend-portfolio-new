import mongoose from "mongoose";


const Profiles = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true,
    },
    googleurl: {
        type: String,
        required: true,
    },
    facebookurl: {
        type: String,
        required: true
    },
    instagaramurl: {
        type: String,
        required: true
    },
    githuburl: {
        type: String,
        required: true
    },
    userphoto: {
        type: String
    }
},
    {
        timestamps: true
    });


export default mongoose.model("profile", Profiles);