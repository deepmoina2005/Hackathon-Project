import Footer from '@/components/Footer';
import Navbar from '@/components/navbar'; // Import Navbar component
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <main className="flex-grow bg-gray-100 py-10">
        {/* Container */}
        <div className="container mx-auto px-4">
          {/* Section 1: About Us Introduction */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Our Virtual Marketplace
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              We connect buyers and sellers in a seamless and interactive platform.
            </p>
            <button
              onClick={() => window.open("http://localhost:5173/", "_blank")}
              className="inline-block bg-primary2 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-primary2-dark transition duration-200"
            >
              Start Shopping
            </button>
          </section>

          {/* Section 2: Our Story */}
          <section className="bg-white p-8 rounded shadow-lg mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700">
              We started with a simple goal – to make buying and selling online
              easy and accessible for everyone. Our platform enables entrepreneurs
              and businesses to reach global markets, while consumers enjoy a wide
              range of quality products at competitive prices.
            </p>
          </section>

          {/* Section 3: Mission */}
          <section className="bg-gray-50 py-8 mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 text-center">
              Our mission is to create a dynamic and reliable marketplace for both
              buyers and sellers. We aim to bring together the best of eCommerce
              while ensuring smooth transactions, excellent customer service, and
              empowering small businesses to thrive.
            </p>
          </section>

          {/* Section 4: Our Services */}
          <section className="bg-white p-8 rounded shadow-lg mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Marketplace</h3>
                <p className="text-gray-700">
                  A fully integrated platform for buyers and sellers to list, browse,
                  and purchase products seamlessly.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Secure Payments</h3>
                <p className="text-gray-700">
                  Enjoy secure and fast payment methods with top-level encryption
                  to protect your transactions.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded shadow">
                <h3 className="text-2xl font-semibold mb-4">Global Shipping</h3>
                <p className="text-gray-700">
                  Access global shipping to get your products delivered right at your
                  doorstep no matter where you are.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Testimonials */}
          <section className="bg-gray-50 py-10 mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              What Our Clients Say
            </h2>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="bg-white p-6 rounded shadow-md max-w-xs">
                <p className="text-gray-700 mb-4">
                  "This platform revolutionized the way I run my business. The
                  ease of use and customer service are amazing!"
                </p>
                <p className="font-semibold">John D.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md max-w-xs">
                <p className="text-gray-700 mb-4">
                  "I found exactly what I needed at a great price. The shipping was
                  fast and reliable!"
                </p>
                <p className="font-semibold">Emily R.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md max-w-xs">
                <p className="text-gray-700 mb-4">
                  "As a seller, this platform helped me reach a wide audience and
                  increase my sales significantly."
                </p>
                <p className="font-semibold">Michael S.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Join Us */}
          <section className="bg-white p-8 rounded shadow-lg mb-12">
            <h2 className="text-4xl font-semibold text-center mb-6">
              Join Us Today
            </h2>
            <p className="text-lg text-center text-gray-700 mb-4">
              Become a part of our vibrant community. Whether you're a buyer or a
              seller, there's always something new for you.
            </p>
            <div className="text-center">
              <NavLink
                to="/register"
                className="bg-primary2 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary2-dark transition duration-200"
              >
                Register Now
              </NavLink>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default About;
