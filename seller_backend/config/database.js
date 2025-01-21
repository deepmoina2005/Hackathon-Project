import mongoose from "mongoose";
import 'dotenv/config'

const db_connect=async()=>{
    mongoose.connection.on('connected', () => console.log('Database connected'))
    await mongoose.connect(process.env.MONGODB_URL)
}

export default db_connect