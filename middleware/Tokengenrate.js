
import jwt from 'jsonwebtoken';

export const TokenCreate = (id) => {
    return jwt.sign({ id }, process?.env?.TOKEN_CREATE, { expiresIn: "3d" });
}

export const TokenResetPassword = (id) => {
    return jwt.sign({ id }, process?.env?.TOKEN_CREATE, { expiresIn: "5m" });
}


export const TokenVerify = (id) => {
    console.log("verify-----------",id)
    return jwt.verify( id , process?.env?.TOKEN_CREATE);
}