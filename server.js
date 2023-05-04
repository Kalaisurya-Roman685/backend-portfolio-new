
import cors from 'cors';
import bodyParser from "body-parser";
import express from 'express';
import dotenv from 'dotenv';
import Connect from "./dbconnect/Dbconnect.js";
import router from './router.js';

dotenv.config();

Connect();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use("/learn",router);



app.listen(process?.env?.PORT, () => {
    console.log("Port Is Running 8000")
})