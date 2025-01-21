import express from 'express'
const product_download=express.Router()
import {product_download_controller, product_download_controller_by_email, product_download_by_category} from '../controllers/product_download_controller.js'
import set_cookie from '../middlewares/jwt_cookie.js'
import jwt_verification from '../middlewares/jwt_verify.js'

product_download.get('/product/download',jwt_verification,product_download_controller_by_email)
product_download.get('/product/category/download',jwt_verification, product_download_by_category)
product_download.get('/all/product/download',product_download_controller)
export default product_download