import seller_auth_2 from "../models/seller_Authentication2_model.js";
import Authentication_process_1_model from "../models/seller_Authentication_model.js";

const seller_auth_2_controller = async (req, res, next) => {
    const { bank_account_no, pan_no, gst_no } = req.body
    console.log(bank_account_no, pan_no, gst_no)

    //Getting the seller email
    const seller_email = req.user_data.seller_email;


    console.log("email ", seller_email)

    //Retriving the seller information from the database
    const seller_info = await Authentication_process_1_model.findOne({ seller_email: seller_email })

    console.log(seller_info._id)

    //checking for the seller business details, exist or not
    let seller_exist_for_this_info = await seller_auth_2.findOne({ seller_id: seller_info._id })

    console.log("seller one account", seller_exist_for_this_info)
    if (seller_exist_for_this_info) {
        return res.json("you already have an account")
    }

    console.log('seller info :', seller_info)

    const seller_exist = await seller_auth_2.findOne({ $or: [{ bank_account_no: bank_account_no }, { gst_no: gst_no }, {pan_no:pan_no}] })
    console.log(seller_exist);

    if (seller_exist) {
        return res.json("seller already exist with this details")
    }
    else {

        try {

            if (seller_info) {
                const seller_personal_info = await seller_auth_2.create({
                    seller_id: seller_info._id,
                    pan_no,
                    gst_no,
                    bank_account_no,
                })

                next()

            }
            else {

                return res.json("You need to sign up")

            }

        } catch (error) {

            console.log(error);

        }

    }


}

export default seller_auth_2_controller