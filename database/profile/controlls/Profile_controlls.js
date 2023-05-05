
import Profile_schema from "../profileshema/Profile_schema.js";


// create profile

export const Profilecreate = async (req, res) => {
    const { username, description, image, buttontext, userId } = req.body;

    if (userId) {
        const createprofile = new Profile_schema({
            username: username,
            description: description,
            buttontext: buttontext,
            userId: userId,
            image: image
        })
        await createprofile.save();
        res.status(201).json({
            success: true,
            code: 201,
            data: createprofile,
            message: "Sucess"
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


// update profile


export const Profileupdate = async (req, res) => {
    const { username, description, image, buttontext, userId } = req.body;
    if (userId) {
        const updates = await Profile_schema.findByIdAndUpdate(req.params.id, {
            username: username,
            description: description,
            buttontext: buttontext,
            userId: userId,
            image: image
        }, { new: true })
        res.status(200).json({
            success: true,
            code: 200,
            message: "Profile Updated Successfully..."
        });

    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Id Missing..."
        })
    }

}

// get single users


export const ProfileSingleuser = async (req, res) => {
    // const { userId } = req.body;
    if (req.params.id) {
        const getsingleuser = await Profile_schema.findById(req.params.id);
        res.status(200).json({
            success: true,
            code: 200,
            data: getsingleuser,
            message: "Success..."
        });

    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Id Missing..."
        })
    }

}

// all get users


export const ProfileAll = async (req, res) => {
    if (req.params.id) {
        const getsingleuser = await Profile_schema.find({ userId: req.params.id });
        res.status(200).json({
            success: true,
            code: 200,
            data: getsingleuser,
            message: "Success..."
        });

    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Id Missing..."
        })
    }

}


// delete user profile


export const ProfileDelete = async (req, res) => {
    if (req.params.id) {
        const getsingleuser = await Profile_schema.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            code: 200,
            message: "Deleted profile..."
        });

    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User Params Id..."
        })
    }

}