import {NextApiRequest, NextApiResponse} from "next";
import {mongooseConnection} from "../../../utils/mongodb";
import User from "../../../models/userModel";
import {errorHandler} from "../../../utils/common";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {email, password} = req.body
    try {
        await mongooseConnection()
        let user = await User.findOne({email})
        if (!user) {
            return errorHandler("User not found", res, 400)
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return errorHandler("Password mismatch", res, 400)
        }

        const payload = {
            id: user.id,
            email: user.email,
        }

        const token = await jwt.sign(payload, process.env.SECRET, {expiresIn: process.env.EXPIRES})
        res.json({
            email: user.email,
            token: token,
        })
         

    } catch (error: any) {
        res.status(500).json({messages: error.message, trace: error.stack});
    }
}