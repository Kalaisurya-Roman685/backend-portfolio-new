import users from "../../../database/dbschema/users.js";

import bcrypt from 'bcrypt';
import { TokenCreate } from "../../../tokengenrate/TokenGenrate.js";

// register services


export const RegisterServices = (params) => {
    return new Promise(async (resolve, reject) => {
        
            const { name, email, password, dob, gender, profileimage, phoneno } = params;
            const exitemailcheck = await users.findOne({ email });
            if (!exitemailcheck) {
                const genslat = await bcrypt.genSalt(10);
                const hashed = await bcrypt.hash(password, genslat);
                const createusers = new users({
                    name: name,
                    email: email,
                    password: hashed,
                    dob: dob,
                    gender: gender,
                    profileimage: profileimage,
                    phoneno: phoneno
                });
                await createusers.save();
                resolve(createusers);
            }
            else {
                reject("User Already Exists!!!");
            }
       
    })
}





// login services
export const LoginServices = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = params;
            const existsusercheck = await users.findOne({ email: email });
            if (existsusercheck) {
                // const passwordceck = await bcrypt.compare(existsusercheck.password, password);
                // if (passwordceck) {
                    const tokenGenerate = {
                        id: existsusercheck?.id,
                        token: TokenCreate(existsusercheck?.id)
                    }
                    resolve(tokenGenerate)
                // }
                // else {
                //     reject("Invalid Crenditial...")
                // }
            }
            else {
                reject("Invalid Crenditial...")
            }
        }
        catch (err) {
            reject(err);
        }
    })
}