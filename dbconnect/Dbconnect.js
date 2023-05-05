import mongoose from "mongoose";
const Connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL).then((res) => {
            console.log("DB Connected...")
        }).catch((err) => {
            console.log("DB Connect Error...")
        })
    }
    catch (err) {
        console.log(err);
    }
}
export default Connect;