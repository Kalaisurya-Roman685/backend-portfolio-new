import { LoginControl, RegisterControl } from "./controlls/auth_control.js";


export const LoginRouter = async (req, res) => {
    try {
        const datas = await LoginControl(req?.body);
        res.status(200).json(datas);
    }
    catch (err) {
        res.status(404).json(err);
    }
}

export const RegisterRouter = async (req, res) => {
    try {
        const datas = await RegisterControl(req?.body);
        res.status(201).json(datas);
    }
    catch (err) {
        res.status(404).json(err);
    }
}
