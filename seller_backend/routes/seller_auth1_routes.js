import seller_auth1_controller from '../controllers/seller_auth1_controller.js'
import seller_login_controller from '../controllers/seller_login_controller.js'
import set_cookie from '../middlewares/jwt_cookie.js'
import {product_download_controller, product_download_controller_by_email} from '../controllers/product_download_controller.js'
import seller_logout from '../controllers/seller_logout_controller.js'
import jwt_verification from '../middlewares/jwt_verify.js'
import seller_auth_2_controller from '../controllers/seller_auth2_controller.js'

import express from 'express'
const seller_auth1=express.Router()

seller_auth1.post('/signup/auth1/',seller_auth1_controller)
seller_auth1.post('/signup/auth2/',jwt_verification,seller_auth_2_controller,product_download_controller_by_email )
seller_auth1.post('/login/',seller_login_controller,jwt_verification,product_download_controller_by_email)
seller_auth1.get('/logout',seller_logout)

export default seller_auth1