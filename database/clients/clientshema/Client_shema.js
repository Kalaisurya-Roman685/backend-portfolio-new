import mongoose from "mongoose";

const ClientShema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    clientname: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min: 1,
        max: 5,
    }

}, {
    timestamps: true
})


export default mongoose.model("cliens", ClientShema);