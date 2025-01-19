// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../components/common/Header";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    id: "",
    category: "",
    buyingPrice: "",
    quantity: "",
    expiryDate: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Details:", product);
    // Add your logic to handle form submission (e.g., API call)
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Add Product"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="bg-[#283142] p-16 rounded-md shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="name">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* Product ID */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="id">
                Product ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={product.id}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                placeholder="Enter product ID"
                required
              />
            </div>

            {/* Select Product Category */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="category">
                Product Category
              </label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                required
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="grocery">Grocery</option>
                <option value="health">Health</option>
                <option value="home">Home</option>
              </select>
            </div>

            {/* Buying Price */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="buyingPrice">
                Buying Price
              </label>
              <input
                type="number"
                id="buyingPrice"
                name="buyingPrice"
                value={product.buyingPrice}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                placeholder="Enter buying price"
                required
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                placeholder="Enter quantity"
                required
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={product.expiryDate}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-white font-medium mb-1" htmlFor="image">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                accept="image/*"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Add Product
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;