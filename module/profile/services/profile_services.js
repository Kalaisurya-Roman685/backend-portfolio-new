

// create profile

import profile_shema from "../../../database/profileschema/profile_shema";



export const ProfileCreateservice = (params) => {
    return new Promise(async (resolve, reject) => {

        const { username, des, googleurl, facebookurl, instagaramurl, githuburl, userphoto } = params;

        try {

            const datas = new profile_shema({
                username: username,
                des: des,
                googleurl: googleurl,
                facebookurl: facebookurl,
                instagaramurl: instagaramurl,
                githuburl: githuburl,
                userphoto: userphoto
            })

            await datas.save();
            reject(datas);

        }
        catch (err) {
            reject(err);
        }

    })
}


// update profile


export const ProfileUpdateservice = (params, datas) => {
    return new Promise(async (resolve, reject) => {

        const { username, des, googleurl, facebookurl, instagaramurl, githuburl, userphoto } = datas;

        try {
            const findbyId = await profile_shema.findByIdAndUpdate(params, {
                username: username, des: des, googleurl: googleurl, facebookurl: facebookurl, instagaramurl: instagaramurl, githuburl: githuburl, userphoto: userphoto
            }, { new: true });
            reject(findbyId);

        }
        catch (err) {
            reject(err);
        }

    })
}


// single Profile get


export const ProfileSingleservice = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findbyId = await profile_shema.findById(params);
            reject(findbyId);
        }
        catch (err) {
            reject(err);
        }
    })
}


// single profile delete


export const ProfileDeleteservice = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findbyId = await profile_shema.findByIdAndRemove(params);
            reject(findbyId);
        }
        catch (err) {
            reject(err);
        }
    })
}