import mongoose from "mongoose";

const Skillshema = new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })


export default mongoose.model("skills", Skillshema);