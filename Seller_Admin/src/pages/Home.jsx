import React from "react";
import Navbar from "../components/navbar"; // Importing Navbar component
import { NavLink } from "react-router-dom";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Ensures full screen layout */}
      {/* Navbar Section */}
      <Navbar />
      
      {/* Main Content Section */}
      <main className="flex-grow bg-gray-100 py-10">
        {/* Content area */}
        <div className="container mx-auto px-4">
          {/* Section 1: Welcome */}
          <section className="mb-12 items-center justify-center">
            <h1 className="text-5xl font-bold text-center mb-6">
              Welcome to Our Website
            </h1>
            <p className="text-xl text-center text-gray-700">
              This is the introduction to the website. Explore the sections below to know more about us.
            </p>

            <div className="text-center flex justify-center mt-6">
              <NavLink
                to="/register"
                className="border-2 hover:border-primary2 text-white bg-primary2 w-44 font-semibold rounded-md px-6 py-2 duration-200 hidden md:block"
              >
                Become a Seller
              </NavLink>
            </div>
          </section>

          {/* Section 2: About Us */}
          <section className="bg-white p-8 rounded shadow-lg mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700">
              We are a company committed to providing high-quality services to
              our clients. Our mission is to empower individuals through
              innovation and technology. We strive for excellence in every
              project we undertake.
            </p>
          </section>

          {/* Section 3: Services */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Service 1</h3>
                <p className="text-gray-700">
                  Description of Service 1. We provide top-notch solutions in
                  this domain to meet your needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Service 2</h3>
                <p className="text-gray-700">
                  Description of Service 2. We offer expert assistance in this
                  area to help you achieve your goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Service 3</h3>
                <p className="text-gray-700">
                  Description of Service 3. Our team is dedicated to providing
                  the best service to clients.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Testimonials */}
          <section className="bg-gray-50 py-10 mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              What Our Clients Say
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="bg-white p-6 rounded shadow-md max-w-xs">
                <p className="text-gray-700 mb-4">
                  "The service we received was exceptional. Highly recommend!"
                </p>
                <p className="font-semibold">Client 1</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md max-w-xs">
                <p className="text-gray-700 mb-4">
                  "Amazing experience! The team was professional and efficient."
                </p>
                <p className="font-semibold">Client 2</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md max-w-xs">
                <p className="text-gray-700 mb-4">
                  "Very satisfied with the results. We will definitely work
                  together again."
                </p>
                <p className="font-semibold">Client 3</p>
              </div>
            </div>
          </section>

          {/* Section 5: Contact Us */}
          <section className="bg-white p-8 rounded shadow-lg mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-center text-gray-700 mb-4">
              If you have any questions or need further information, feel free
              to reach out to us!
            </p>
            <div className="flex justify-center">
              <button className="bg-primary2 text-white px-6 py-3 rounded-lg">
                Get in Touch
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
