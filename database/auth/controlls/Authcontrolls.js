



// post method

import Auth_schema from "../authshema/Auth_schema.js";

export const AuthRegister = async (req, res) => {

    const { username, email, password, image } = req.body;

    const existusercheck=await Auth_schema.findOne({email});

    if(!existusercheck)
    {
        res.status(404).json("")
    }
    else
    {

    }

}