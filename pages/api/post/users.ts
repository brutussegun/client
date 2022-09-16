import {NextApiRequest, NextApiResponse} from "next";
import {connectToDatabase} from "../../../utils/mongodb";
import {errorHandler, userFormValidator} from "../../../utils/common";
import User from "../../../models/userModel";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "POST") {
        errorHandler("Request Method Not Allowed", res)
    }

    try {
        await connectToDatabase()
        const {name, email, password} = req.body
        let user = await User.findOne({email});
        if (user) {
            errorHandler("User already exists", 400)
        }
        await userFormValidator(req.body)

        user = new User({
            name: name,
            email: email,
            password: password,
        })


        return user().save

    } catch (error: any) {
        res.status(500).json({message: error.message, trace: error.stack})
    }


}
