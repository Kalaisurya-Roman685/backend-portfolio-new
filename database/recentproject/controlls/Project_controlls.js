import Project_shema from "../projectshcema/Project_shema.js";


// create 
export const Projectcreate = async (req, res) => {
    const { userId, image, redirecturl, pathtexts } = req.body;
    if (userId) {
        const projects = new Project_shema({
            image: req.file.path,
            redirecturl: redirecturl,
            pathtexts: pathtexts,
            userId: userId
        })
        // console.log(projects,"projects")
        await projects.save();
        res.status(201).json({
            success: true,
            code: 201,
            data: projects,
            message: "Recent Project Created..."
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


// update projects


export const Projectupdate = async (req, res) => {
    const { userId, image, redirecturl, pathtexts } = req.body;

    if (req.params.id) {
        const projects = await Project_shema.findByIdAndUpdate(req.params.id, {
            image: req.file.path,
            redirecturl: redirecturl,
            pathtexts: pathtexts,
            userId: userId
        }, {
            new: true
        })

        res.status(200).json({
            success: true,
            code: 200,
            message: "Recent Project Updated..."
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


// single projects


export const Projectsingle = async (req, res) => {

    if (req.params.id) {
        const projects = await Project_shema.findById(req.params.id);
        res.status(200).json({
            success: true,
            code: 201,
            data: projects ? projects : "No Data",
            message: "Success..."
        });
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User id Not Matching..."
        })
    }
}

// all find projects



export const ProjectAllprojects = async (req, res) => {

    if (req.params.id) {
        const projects = await Project_shema.find({ userId: req.params.id });
       
        res.status(200).json({
            success: true,
            code: 201,
            data: projects ? projects : "No Results",
            message: "Success..."
        });
    }
    else {
        res.status(404).json({
            success: false,
            code: 404,
            message: "User id Not Matching..."
        })
    }
}


// delete projects


export const Projectdelete = async (req, res) => {

    if (req.params.id) {
        const projects = await Project_shema.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            code: 201,
            message: "Recent Project Deleted..."
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