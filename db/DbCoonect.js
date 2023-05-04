import mongoose from "mongoose";


const Connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("Db Connected...");
    }
    catch (err) {
        console.log(err);
    }
}

export default Connectdb;

