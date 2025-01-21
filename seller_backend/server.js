import express from 'express';
import db_connect from './config/database.js';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import cors from 'cors'
// import upload from './config/multer.js';
// import path from 'path'

// const __dirname=path.dirname(import.meta.url)
// console.log(__dirname)
const allowedOrigins = ['http://localhost:5173']

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: allowedOrigins, credentials: true}))
// app.use(express.urlencoded({ extended: true }))

// app.use(express.static(path.join(__dirname, './file_storage')))

import seller_auth1 from './routes/seller_auth1_routes.js';
app.use('/seller',seller_auth1)

import product_upload from './routes/product_upload_model.js';
app.use('/seller',product_upload)

import product_download from './routes/product_download_routes.js';
app.use('/seller',product_download)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT, async () => {
  await db_connect()
  console.log(`Server is running on port ${process.env.PORT}`);
});
