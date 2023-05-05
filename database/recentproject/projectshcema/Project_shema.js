import mongoose from "mongoose";


const ProjectShema = new mongoose.Schema({
    image: {
        type: String
    },
    redirecturl: {
        type: String,
        required: true,
    },
    pathtexts: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });


export default mongoose.model("recentprojects", ProjectShema);