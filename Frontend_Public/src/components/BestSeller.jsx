import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contacts/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestseller,setBestSeller] = useState([]);

    useEffect(()=>{
      const bestProduct = products.filter((item)=>(item.bestseller))
      setBestSeller(bestProduct.slice(0,5))
    },[])

  return (
    <div className='my-5'>
      <div className='text-center text-3x1 py-8'>
        <Title text1={'BEST'} text2={'SELLING PRODUCTS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore quos natus ducimus perspiciatis et tenetur culpa non qui. Iste ea, facilis architecto deserunt recusandae impedit incidunt temporibus labore magni?
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestseller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller