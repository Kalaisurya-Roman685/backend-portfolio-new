
// post method
import { TokenCreate, TokenResetPassword, TokenVerify } from "../../../middleware/Tokengenrate.js";
import Auth_schema from "../authshema/Auth_schema.js";
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
export const AuthRegister = async (req, res) => {
    const { username, email, password, image, instagaramurl, youtubeurl, facebookurl, dob, gender, contactno } = req.body;
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
            image: image,
            // instagaramurl: instagaramurl,
            // youtubeurl: youtubeurl,
            // facebookurl: facebookurl,
            // dob: dob,
            // gender: gender,
            // contactno: contactno
        });

        const { instagaramurl, youtubeurl, facebookurl, gender, dob, contactno, ...otherdetails } = Createuser._doc;
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
                code: 200,
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


// get update details

export const AuthUser = async (req, res) => {
    const { email, password, username, dob, contactno, gender, facebookurl, youtubeurl, instagaramurl,image } = req.body;
    if (req.params.id) {
        // const gensalt = await bcrypt.genSalt(10);
        // const hashed = await bcrypt.hash(password, gensalt);
        const passwordcheck = await Auth_schema.findByIdAndUpdate(req.params.id, {
           username: username, dob: dob, contactno: contactno, gender: gender, facebookurl: facebookurl, youtubeurl: youtubeurl, instagaramurl: instagaramurl,image:"kalai"
        }, { new: true })
        res.status(200).json({
            success: true,
            code: 200,
            user: passwordcheck,
            message: "Profile Update Successfully..."
        });
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Not Found..."
        })
    }
}


// single profile


export const AuthUserdetails = async (req, res) => {
    if (req.params.id) {
        const passwordcheck = await Auth_schema.findById(req.params.id);
        res.status(200).json({
            success: true,
            code: 200,
            user: passwordcheck,
            message: "Profile get Successfully..."
        });
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Not Found..."
        })
    }
}


// forgetpassword


export const AuthForgetpassword = async (req, res) => {
    const { email } = req.body;

    const existemailcheck = await Auth_schema.findOne({ email });

    if (existemailcheck) {
        const tokens = TokenResetPassword(existemailcheck?.id);
        const LinkProvider = `http://localhost:3000/reset-password/${tokens}`;
        const transporter = nodemailer.createTransport({
            host: 'smtp.elasticemail.com',
            port: 2525,
            auth: {
                user: 'kalai@cdp360.com',
                pass: '688CD62A15A2F2D0598FD0B766C6487D9F41'
            }
        });
        var mailOptions = {
            from: 'kalai@cdp360.com',
            to: email,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
            html: `
            <h1>Forget password Link Click..!</h1>
             <a href='http://localhost:3000/reset-password/${tokens}'>
            http://localhost:3000/reset-password/${tokens}
            </a>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({
            success: true,
            code: 200,
            url: LinkProvider,
            message: "Reset Password..."
        });
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "Email Not Found..."
        })
    }
}


export const AuthForgetpasswordVerify = async (req, res) => {
    const { password } = req.body;

    if (req.params.id) {
        const verifyToken = await TokenVerify(req.params.id);
        if (verifyToken) {
            const gensalt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, gensalt);
            const updatepassword = await Auth_schema.findByIdAndUpdate({ _id: verifyToken?.id }, {
                password: hashed,
            },

                { new: true })

            if (updatepassword) {
                res.status(200).json({
                    success: true,
                    code: 200,
                    message: "Reset Password Changed User..."
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    code: 404,
                    message: "User Id Not Matched..."
                })
            }

        }
        else {
            res.status(404).json({
                success: false,
                code: 404,
                message: "Invalid Token..."
            })
        }


    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "Email Not Found..."
        })
    }
}