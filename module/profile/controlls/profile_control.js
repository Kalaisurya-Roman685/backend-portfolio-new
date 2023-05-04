import { ProfileCreateservice } from "../services/profile_services"


export const ProfileControls = (paramas) => {
    return new Promise(async (resolve, reject) => {
        try {
            const datas = await ProfileCreateservice(paramas);
            resolve(datas);
        }
        catch (err) {
            reject(err);
        }
    })
}