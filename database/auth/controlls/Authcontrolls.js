
// post method
import { TokenCreate } from "../../../middleware/Tokengenrate.js";
import Auth_schema from "../authshema/Auth_schema.js";
import bcrypt from 'bcrypt';
export const AuthRegister = async (req, res) => {
    const { username, email, password, image } = req.body;
    const existusercheck = await Auth_schema.findOne({ email });
    if (existusercheck) {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Already Exists..."
        })
    }
    else {
        const gensalt = await bcrypt.genSalt(10);
        const hanshedpassword = await bcrypt.hash(password, gensalt);
        const Createuser = new Auth_schema({
            username: username,
            email: email,
            password: hanshedpassword,
            image: image
        });
        await Createuser.save();
        res.status(201).json({
            success: true,
            code: 201,
            message: "User Register Successfully"
        });
    }
}

// login user

export const AuthLogin = async (req, res) => {
    const { email, password } = req.body;
    const existusercheck = await Auth_schema.findOne({ email });
    if (existusercheck) {
        const passwordcheck = await bcrypt.compare(password, existusercheck.password);
        if (passwordcheck) {
            const tokens = {
                id: existusercheck?.id,
                token: TokenCreate(existusercheck?.id)
            }
            res.status(200).json({
                success: true,
                code: 201,
                user: tokens,
                message: "User Login Successfully..."
            });
        }
        else {
            res.status(404).json({
                success: false,
                code: 404,
                message: "Wrong password or email..."
            })
        }
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Not Found..."
        })
    }
}