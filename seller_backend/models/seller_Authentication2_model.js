import mongoose from 'mongoose'

const seller_Authentication_2 = new mongoose.Schema({
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Authentication_process_1_model'
    },
    bank_account_no: {
        type: String,
        required: true,
    },
    pan_no: {
        type: String,
        required: true,
        // unique: true
    },
    gst_no: {
        type: String,
    }
})

const seller_auth_2 = new mongoose.model('seller_auth_2', seller_Authentication_2)

export default seller_auth_2