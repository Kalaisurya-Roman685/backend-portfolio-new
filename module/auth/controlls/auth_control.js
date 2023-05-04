import { LoginServices, RegisterServices } from "../services/auth_service.js"

// register control

export const RegisterControl = (params) => {
    return new Promise(async (resolve, reject) => {
        const Datas = await RegisterServices(params);
        resolve(Datas);
    }).catch((err) => {
        reject(err);
    })
}


// login control

export const LoginControl = (params) => {
    return new Promise(async (resolve, reject) => {
        const Datas = await LoginServices(params);
        resolve(Datas);
    }).catch((err) => {
        reject(err);
    })
}