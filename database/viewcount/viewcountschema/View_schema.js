import mongoose from "mongoose";


const ViewSchema = new mongoose.Schema({
    viewCount: {
        type: Number
    }
},{
    timestamps:true
})


export default mongoose.model("viewcount",ViewSchema);