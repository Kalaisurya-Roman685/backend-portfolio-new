import mongoose from "mongoose";

const Authschema = new mongoose.Schema({
    username: {
        type: String,
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
    },
    instagaramurl: {
        type: String
    },
    youtubeurl: {
        type: String
    },
    facebookurl: {
        type: String
    },
    dob: {
        type: String,
    },
    gender: {
        type: String
    },
    contactno: {
        type: String
    }

},
    {
        timestamps: true
    });


export default mongoose.model("users", Authschema);