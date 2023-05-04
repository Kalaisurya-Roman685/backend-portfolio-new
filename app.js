import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import Connectdb from "./db/DbCoonect.js";
dotenv.config();
Connectdb();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '5mb' }));

app.get("/",(req,res)=>{
    res.send("kalai port is running!!!");
})
app.listen(8000, (req, res) => {
    console.log("Port Running...")
})