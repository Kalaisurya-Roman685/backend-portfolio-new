

import Skills_shema from "../skillschema/Skills_shema";

// create skills

export const Skillscreate = async (req, res) => {
    const { image, des, title, userId } = req.body

    if (userId) {
        const skill = new Skills_shema({
            image: image,
            userId: userId,
            title: title,
            des: des
        })
        await skill.save();
        res.status(200).json({
            success: true,
            code: 201,
            data: skill,
            message: "Skill Created..."
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


// update skills


export const Skillsupdate = async (req, res) => {
    const { image, des, title, userId } = req.body

    if (req.params.id) {
        const skill = await Skills_shema.findByIdAndUpdate(req.params.id, {
            image: image,
            userId: userId,
            title: title,
            des: des
        }, { new: true })
        res.status(200).json({
            success: true,
            code: 201,
            message: "Skills Updated..."
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

// delete skills

export const Skillsdelete = async (req, res) => {


    if (req.params.id) {
        const skill = await Skills_shema.findOneAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            code: 201,
            message: "Skills Deleted..."
        });
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "Params Id Missing..."
        })
    }
}


// get single skills

export const Skillsingle = async (req, res) => {
    if (req.params.id) {
        const skill = await Skills_shema.findById(req.params.id)
        res.status(200).json({
            success: true,
            code: 201,
            data: skill ? skill : "No Data",
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

// skill all get

export const Skillgetall = async (req, res) => {
    if (req.params.id) {
        const skill = await Skills_shema.find({ userId: req.params.id })
        res.status(200).json({
            success: true,
            code: 201,
            data: skill ? skill : "No Data",
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