import { ProfileControls } from "./controlls/profile_control";
import { ProfileDeleteservice, ProfileSingleservice, ProfileUpdateservice } from "./services/profile_services";


// create profile
export const Profile_router_create = async (req, res) => {
    try {
        const Datas = await ProfileControls(req?.body);
        res.status(201).json(Datas);
    }
    catch (err) {
        res.status(404).json(err);
    }
}


// update profile


export const Profile_router_Update = async (req, res) => {
    try {
        const Datas = await ProfileUpdateservice(req?.params?.id, req?.body);
        res.status(201).json(Datas);
    }
    catch (err) {
        res.status(404).json(err);
    }
}


// get single profile

export const Profile_router_Single = async (req, res) => {
    try {
        const Datas = await ProfileSingleservice(req?.params?.id);
        res.status(201).json(Datas);
    }
    catch (err) {
        res.status(404).json(err);
    }
}


// delete single proile


export const Profile_router_Delete = async (req, res) => {
    try {
        const Datas = await ProfileDeleteservice(req?.params?.id);
        res.status(200).json("Deleted");
    }
    catch (err) {
        res.status(404).json(err);
    }
}