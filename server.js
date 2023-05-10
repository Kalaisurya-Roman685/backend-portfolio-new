import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connect from './dbconnect/Dbconnect.js';
import routerauth from './routers.js';

dotenv.config();
Connect();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use("/Images", express.static("./Images"))



// api calls
app.use("/portfolio", routerauth)

app.listen(process?.env?.PORT, () => {
    console.log("Port Is Running 9500...")
})
