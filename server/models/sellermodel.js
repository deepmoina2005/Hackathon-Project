import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({

})

const sellerModel = mongoose.models.seller || mongoose.model('seller',sellerSchema);

export default sellerModel;