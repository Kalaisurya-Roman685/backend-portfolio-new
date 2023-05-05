import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    buttontext: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    });

export default mongoose.model("profile", ProfileSchema);