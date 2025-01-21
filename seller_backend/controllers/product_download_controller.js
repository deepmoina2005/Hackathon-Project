import Product from "../models/product_model.js";
import Authentication_process_1_model from "../models/seller_Authentication_model.js";
import seller_auth_2 from "../models/seller_Authentication2_model.js";

//For users or seller to see all the product images
const product_download_controller = async (req, res) => {
    try {

        // Fetch all products from the database
        const products = await Product.find();

        console.log(products)

        const product_details = products.map(product => {

            return {
                product_name: product.product_name,
                product_description: product.product_description,
                product_price: product.product_price,
                productImageUrl: product.product_image_url,
                product_category: product.product_category
            };

        });


        res.json({ product_details });

    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ message: "Error fetching products" });
    }
}


//For seller to download their product images
const product_download_controller_by_email = async (req, res) => {
    const seller_email = req.user_data.seller_email

    console.log("", seller_email)


    const seller_products = await Authentication_process_1_model.findOne({ seller_email: seller_email }).populate("seller_product")

    //checking if the seller auth2 is registered or not
    const seller_exist = await seller_auth_2.findOne({ seller_id: seller_products._id })

    if (!seller_exist) {
        return res.status(200).json("You must registed your account")
    }

    //If the seller has not uploaded any products
    if (seller_products.seller_product[0] == undefined) {
        console.log("seller product is there", seller_products.seller_product)
        return res.json({
            seller_email: seller_email,
            seller_name: seller_products.seller_name,
            "message": "You have not uploaded any products"
        })
    }


    const seller_products_length = seller_products.seller_product.length;

    let product_details = []
    let product_total_price = 0;


    let product = seller_products.seller_product.map(product => {
        product_total_price += product.product_price
        return {
            product_name: product.product_name,
            product_category: product.product_category,
            product_price: product.product_price,
            product_description: product.description,
            product_url: product.product_image_url
        }
    })


    return res.status(200).json({ product_total_price, "seller products": product })
}

const product_download_by_category = async (req, res) => {

    const seller_email = req.user_data.seller_email

    const { product_category, min_price, max_price, product_name } = req.body



    //Add logic for verifying incoming data -> if(product_name){}
    let product_obj = {}

    let min_num = Number(min_price)
    let max_num = Number(max_price)
    console.log(typeof (min_num))


    if (product_category) {
        product_obj.product_category = { $regex: product_category, $options: "i" }
    }
    else if (product_name) {
        product_obj.product_name = { $regex: product_name, $options: "i" }
    }
    else if (min_price && max_price) {
        product_obj.product_price = { $gte: min_num, $lte: max_num }
    }
    else if (min_price) {
        product_obj.product_price = { $gte: min_num }
    }
    else if (max_price) {
        product_obj.product_price = { $lte: max_num }
    }
    else {
        return res.status(400).json({ message: "Please provide a valid search criteria" })
    }

    const product_list = await Authentication_process_1_model
        .findOne({ seller_email })
        .populate({
            path: 'seller_product',
            match: product_obj,
        });


    console.log("----------",product_list.seller_product[0])

    if (product_list.seller_product[0]==undefined) {
        return res.status(200).json({ message: "No products found" })
    }

    // let product_details = []

    let product_details = product_list.seller_product.map(product => {
        return {
            product_name: product.product_name,
            product_category: product.product_category,
            product_price: product.product_price,
            product_description: product.description,
            product_url: product.product_image_url
        }

    })

    res.json(product_details)
}



export { product_download_controller, product_download_controller_by_email, product_download_by_category }