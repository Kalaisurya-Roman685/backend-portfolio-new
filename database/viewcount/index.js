import express from 'express';
import { Getviewcontroll } from './controlls/View_controlls';
const routerView = express.Router();
routerView.get("/", Getviewcontroll);

export default routerView;