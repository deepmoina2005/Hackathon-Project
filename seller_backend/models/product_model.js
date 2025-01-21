import mongoose from 'mongoose';

const product_schema = new mongoose.Schema({
  product_category: {
    type: String, required: true
  },

  product_name: {
    type: String, required: true
  },
  product_upload_by: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Authenticaton_process_1', required: true
  },

  product_quantity: { type: Number, require: true, },
  // product_review: {
  //   type: String,
  //   required: true
  // },
  product_price: { type: Number, required: true },


  product_description: { type: String, required: true },


  product_image_url: { type:[ String], required: true },


  created_at: { type: Date, default: Date.now },


  updated_at: { type: Date, default: Date.now }
});

// Create the product model
const Product = mongoose.model('Product', product_schema);

export default Product;
