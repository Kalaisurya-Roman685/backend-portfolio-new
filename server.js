import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connect from './dbconnect/Dbconnect.js';
import routerauth from './routers.js';

dotenv.config();
Connect();
const app = express();
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['GET','POST','PUT','PATCH','DELETE']
// }));4

// app.use((req, res, next) => {
//     const allowedOrigins = ['http://localhost:3000'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//       res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     return next();
//   });

app.use(express.json());
app.use(bodyParser.json());

app.use("/Images", express.static("./Images"))

// api calls
app.use("/portfolio", routerauth)

app.listen(process?.env?.PORT, () => {
    console.log("Port Is Running 9200...")
})
