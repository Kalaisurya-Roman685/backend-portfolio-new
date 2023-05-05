
import jwt from 'jsonwebtoken';

export const TokenCreate = (id) => {
    return jwt.sign({ id }, process?.env?.TOKEN_CREATE, { expiresIn: "3d" });
}