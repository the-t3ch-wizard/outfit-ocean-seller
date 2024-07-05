import { useUserContext } from '@/context/AuthContext'
import React from 'react'
import { Description, QuantityButton, Title } from '.';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export default function ProductsCard({ product }) {
  
  return (
    <div className='w-64 sm:w-80 bg-border gap-2 flex flex-col justify-center items-center border border-border rounded-sm'>
      
      <div className='w-full h-72 sm:hidden'>
        <Link to={`/product/${product.$id}`}>
          <img
            src={product.imageUrl}
            alt='product image'
            className='w-full h-full object-cover rounded-sm'
            draggable='false'
          />
        </Link>
      </div>

      <div className='sm:hidden w-full h-20 flex flex-col gap-3 p-1 justify-between items-start'>
        <Link to={`/product/${product.$id}`} className='w-full h-14 flex justify-center items-start overflow-hidden'>
          <Description description={product.title} classname={`text-primary w-full text-center`} />
        </Link>
        <Description description={`₹ `+product.price} classname={`text-primary w-full text-center mb-2`} />
      </div>

      <div className='sm:w-full sm:h-96 hidden sm:block'>
        <Link to={`/product/${product.$id}`}>
          <img
            src={product.imageUrl}
            alt='product image'
            className='w-full h-full object-cover rounded-sm'
            draggable='false'
          />
        </Link>
      </div>

      <div className='hidden w-full h-24 sm:flex flex-col gap-3 p-1 justify-between items-start'>
        <Link to={`/product/${product.$id}`} className='w-full h-16 flex justify-center items-start overflow-hidden'>
          <Description description={product.title} classname={`text-primary w-full text-center`} />
        </Link>
        <Description description={`₹ `+product.price} classname={`text-primary w-full text-center mb-2`} />
      </div>

    </div>
  )
}
