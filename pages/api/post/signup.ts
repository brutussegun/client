import {NextApiRequest, NextApiResponse} from "next";
import {mongooseConnection} from "../../../utils/mongodb";
import {errorHandler, userFormValidator} from "../../../utils/common";
import User from "../../../models/userModel";
import {expiryCalculator} from '../../../hooks/customHooks'

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    if (req.method === "POST") {


        const {name, email, password} = req.body

        try {
            await mongooseConnection()
            let user = await User.findOne({email});
            if (user) {
                return errorHandler("User already exists", res, 400)
            }
            await userFormValidator(req.body)
            user = new User({
                name: name,
                email: email,
                password: password,
            })
            const saltRounds = 12;
            const salt = await bcrypt.genSalt(saltRounds)
            user.password = await bcrypt.hash(password, salt)
            await user.save()

            const payload = {
                id: user.id,
                email: user.email,
            }
            const token = await jwt.sign(payload, process.env.SECRET, {expiresIn: process.env.EXPIRES})
            const expiry = await expiryCalculator(new Date(), 48);

            return res.json({
                id: user.id,
                email: user.email,
                token: token,
                expiry: expiry.toISOString(),
            })

        } catch (error: any) {
            res.status(500).json({message: error.message, trace: error.stack})
        }
    } else {
        return errorHandler("Request Method Not Allowed", res)

    }

}
