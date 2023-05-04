import jwt from 'jsonwebtoken'


export const TokenCreate = (data) => {
    return jwt.sign({ data }, process?.env?.TOKEN_URL, { expiresIn: "2d" });
}