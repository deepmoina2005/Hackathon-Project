import Authentication_process_1_model from "../models/seller_Authentication_model.js"
import product_upload from "../routes/product_upload_model.js"
import Product from "../models/product_model.js"
import mongoose from "mongoose"

// const p_data = await Product.find({ product_name: 'Hackathon_data_models.png' }).populate("product_upload_by")


const product_update_controller = async (req, res) => {
    console.log(res.user_data.seller_email)
    const seller_product_info = await Authentication_process_1_model.findOne({ seller_email: res.user_data.seller_email }).populate("seller_product")

    // const seller_product_length = seller_product_info.seller_product.length
    // console.log("______________________")

    // console.log(seller_product_info)

    // console.log("______________________")
    // console.log(seller_product_info.seller_product)

    // console.log("pv name", req.body.product_previous_name)
    // console.log("latest name", req.body.product_latest_name)



    const index = seller_product_info.seller_product.findIndex((seller_product) => {
        console.log(seller_product)
        console.log(seller_product["product_name"])
        return seller_product.product_name === req.body.product_previous_name;
    })

    if (index == -1) {
        return res.status(404).json({ message: "Product not found!" });
    }


    const productId = seller_product_info.seller_product[index]['_id'];
    console.log(productId)

    const pf = await Product.findById(productId)

    pf.product_name = req.body.product_latest_name;


    await pf.save();
    console.log(pf)


    return res.json(seller_product_info)
}


export default product_update_controller