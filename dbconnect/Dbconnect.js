import mongoose from "mongoose";


const Connect = async () => {
    try {
        const conn = mongoose.connect(process?.env?.MONGOOSE_URL).then((res) => {

            console.log("DB connected...")

        }).catch((err) => {
            console.log("DB not connected... check db")
        })
    }
    catch (err) {
        console.log(err);
    }
}

export default Connect;