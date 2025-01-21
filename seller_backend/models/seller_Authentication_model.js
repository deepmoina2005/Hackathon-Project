import mongoose from "mongoose";

const Authentication_process_1 = new mongoose.Schema({
    seller_name: {
        type: String,
        required: true,
    },

    seller_email: {
        type: String,
        required: true,
        unique: true
    },

    seller_password: {
        type: String,
        required: true,
    },

    seller_product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ],

    created_at: {
        type: Date,
        default: Date.now
    }
})

const Authentication_process_1_model = mongoose.model("Authenticaton_process_1", Authentication_process_1)
export default Authentication_process_1_model