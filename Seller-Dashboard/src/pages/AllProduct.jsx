import React from "react";
import Header from "../components/common/Header";
import ProductsTable from "../components/products/ProductsTable";

const AllProduct = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"All Product"} />

      <main className="max-w-8xl mx-auto pt-4 px-4 h-full lg:px-8">
        <div className="bg-[#283142] p-16 rounded-md shadow-md">
          <ProductsTable />
        </div>
      </main>
    </div>
  );
};

export default AllProduct;
