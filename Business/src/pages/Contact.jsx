import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import Navbar from '@/components/navbar'
import contactImage from '../assets/contact.webp';  // Importing the image
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      
      {/* Title Section */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Info Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={contactImage} alt="Store Location" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-800'>Our Store</p>
          <p className='text-gray-600'>785701 Hahchara <br />suite 450, Assam, India</p>
          <p className='text-gray-600'>Tel : (+91) 857-569-4852 <br /> Email: admin23@gmail.com</p>
          <p className='font-semibold text-xl text-gray-800'>Careers at Forever</p>
          <p className='text-gray-600'>Learn more about teams and job opening</p>
          <button className='bg-primary2 border border-primary2 text-white px-8 py-4 text-sm hover:bg-primary2-dark hover:text-white transition-all duration-500'>
            Explore job
          </button>
        </div>
      </div>

      {/* Newsletter Box Section */}
      <NewsLetterBox />

      <Footer/>
    </div>
  )
}

export default Contact;
