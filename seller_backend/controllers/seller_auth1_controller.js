import Authentication_process_1_model from "../models/seller_Authentication_model.js";
import bcrypt from 'bcrypt'

import set_cookie from "../middlewares/jwt_cookie.js";

const seller_auth1_controller = async (req, res) => {

    const saltRounds = 10;

    const { seller_name, seller_email, seller_password } = req.body

    //searching for the seller
    const seller_exist=await Authentication_process_1_model.findOne({seller_email})

    if(seller_exist){
        return res.status(200).json("Email already exist")
    }

    console.log(seller_name)

    try {

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(seller_password, salt);

        const seller = await Authentication_process_1_model.create({
            seller_name,
            seller_email,
            seller_password: hash
        })

        set_cookie({ seller_email },res)

        return res.status(200).json("Now Enter your business details")

    } catch (err) {

        console.log(err);
        return res.status(400).end("Try again later server is bussy")

    }
}

export default seller_auth1_controller