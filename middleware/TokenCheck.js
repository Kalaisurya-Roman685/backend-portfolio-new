import jwt from 'jsonwebtoken';

const AuthCheck = async (req, res, next) => {
    let token = req.header("authorization");
    try {
        if (token) {
            let user = jwt.verify(token, process.env.TOKEN_CREATE);
            req.id = user.id;
        }
        else {
            return res.status(404).json("Unauthorized User")
        }
        next();
    }
    catch (err) {
        return res.status(404).json("Unauthorized User");

    }


}

export default AuthCheck;