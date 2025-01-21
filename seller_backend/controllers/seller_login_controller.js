import bcrypt from 'bcrypt'
import Authentication_process_1_model from '../models/seller_Authentication_model.js';
import set_cookie from '../middlewares/jwt_cookie.js';
import seller_auth_2 from '../models/seller_Authentication2_model.js';

const seller_login_controller = async (req, res, next) => {
    const { seller_email, seller_password } = req.body

    console.log("______",seller_email)
    const seller = await Authentication_process_1_model.findOne({ seller_email });
    // set_cookie({seller_email})
    console.log(seller, "______")
    if(!seller){
        return res.json("you don't have an account")
    }
const seller_p_d=await seller_auth_2.findOne({seller_id:seller._id})


    if (seller) {
        bcrypt.compare(seller_password, seller.seller_password, async(err, result)=> {
            // result == true
            if (!result) {
            console.log(seller)

                return res.json("User not found")
            }

            console.log(seller)

            // await next()
            set_cookie({ seller_email },res);
            if (!seller_p_d) {
                return res.json("you must register your account")
            }
            // res.redirect('/seller/product/download')
            await next()
            // return res.json("User found")
        });

    } else {
        console.log(seller)
        res.json("User not found")

    }

}

export default seller_login_controller