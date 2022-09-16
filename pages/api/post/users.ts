import {NextApiRequest, NextApiResponse} from "next";
import {connectToDatabase} from "../../../utils/mongodb";
import {errorHandler, userFormValidator} from "../../../utils/common";
import User from "../../../models/userModel";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== "POST") {
        errorHandler("Request Method Not Allowed", res)
    }
    const {name, email, password} = req.body

    try {
        await connectToDatabase()
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


        await user().save
        return res.json(user)

    } catch (error: any) {
        res.status(500).json({message: error.message, trace: error.stack})
    }


}
