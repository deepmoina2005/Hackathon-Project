import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/product_model.js';
import Authentication_process_1_model from '../models/seller_Authentication_model.js';
import fs from 'fs'
import path from 'path'
import url from 'url'

import 'dotenv/config'

const product_upload_controller = async (req, res) => {

  if (!req.files) {
    return res.status(400).json({
      message: "No file uploaded!",
    });
  }
  let product_details = {
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_price: req.body.product_price,
    product_category: req.body.product_category,
    product_quantity: req.body.product_quantity
  }


  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });


  const seller_data = res.user_data.seller_email

  const file_length = req.files.length

  const arr_files = [];



  let i = 0

  while (i < file_length) {

    arr_files.push(req.files[i])
    i++

  }

  //It returns array of objects
  console.log(arr_files)

  //The result avriable store the values from cloudinary
  let result = []

  i = 0;

  const file_name_for_public_id = seller_data + product_details.product_name


  // console.log(fold);

  while (i < file_length) {
    const uploadResult = await cloudinary
      .uploader.upload(
        './uploads/' + arr_files[i]["filename"], {
        asset_folder: 'Seller_Products',
        public_id: file_name_for_public_id + i,
        display_name: product_details.product_name,
      })
      .catch((error) => {
        console.log(error);
      });

    result.push(uploadResult)

    i++

  }


  const seller_email = res.user_data.seller_email
  console.log(seller_email)

  const uploadsDir = path.join(process.cwd(), './uploads');
  console.log(uploadsDir)

  let path_dir=[];
  for (let i = 0; i < req.files.length; i++) {
    path_dir.push( path.join(uploadsDir, req.files[i]["originalname"]));
    console.log(`path dir${i}`, path_dir[i]);
  }

  console.log('File Path:', path_dir);




  //Files get deleted after it gets uploads to cloudinary
  for(let i=0;i<req.files.length;i++){

  fs.unlink(path_dir[i], err => {
    if (err) {
      console.error('Error deleting the file:', err);
    } else {
      console.log("File deleted");
    }
  })
  }

  let product_data = await product_upload_to_database(arr_files, result, seller_data, product_details)

  // res.json(product_data)
  res.json(arr_files)
}

const product_upload_to_database = async (arr_files, result, seller_data, product_details) => {

  const length_of_files = arr_files.length
  // const length_of_url = result.length

  // console.log(length_of_files);

  let image_url = []
  console.log("the length of URl ", result.length)
  // console.log("the result value",result)

  for (const element of result) {

    image_url.push(element['url'])
  }


  //Checking for the seller

  const seller_model = await Authentication_process_1_model.findOne({ seller_email: seller_data });
  // console.log(seller_model)
  if (!seller_model) {
    return
  }

  //inserting product
  try {
    const product_data = await Product.create({
      product_category: product_details.product_category,
      product_quantity: product_details.product_quantity,
      product_name: product_details.product_name,
      product_image_url: image_url,
      product_description: product_details.product_description,
      product_price: product_details.product_price,
      product_upload_by: seller_model._id,

    })
    console.log("product data", product_data)
    seller_model.seller_product.push(product_data._id)
    await seller_model.save()

    return product_data

  } catch (error) {
    console.log(error)
  }






  console.log("**************************")



}




export default product_upload_controller