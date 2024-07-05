import { useUserContext } from '@/context/AuthContext'
import React from 'react'
import { Description, QuantityButton, Title } from '.';
import { Button } from '../ui/button';

export default function ProductsDetails({ product }) {

  if (product){
    return (
      <div className='w-full bg-card p-4 flex justify-start items-start'>
        
        <div className='sm:hidden flex flex-col justify-center items-center'>
          <div className='w-full h-96'>
            <img
              src={product.imageUrl}
              alt='product image'
              className='rounded-sm w-full h-full object-cover'
            />
          </div>

          <div className=' w-full flex flex-col gap-2 h-96 justify-start items-start py-4'>
            <Title title={product.title} classname={` text-primary text-2xl`} />

            <div className='w-full'>
              <Description description={`M.R.P: `+`₹ `+product.price} classname={` py-4 text-primary text-2xl `} />
            </div>
          </div>
        </div>

        <div className='hidden sm:flex justify-start items-start'>
          <div className=' w-[50%] min-h-96'>
            <img
              src={product.imageUrl}
              alt='product image'
              className='rounded-sm'
            />
          </div>

          <div className=' w-[50%] flex flex-col gap-2 min-h-96 justify-start items-start px-4'>
            <Title title={product.title} classname={` text-primary text-2xl `} />

            <div className='w-full'>
              <Description description={`M.R.P: `+`₹ `+product.price} classname={` py-4 text-primary text-2xl`} />
            </div>
          </div>
        </div>
  
      </div>
    )
  } else {
    return (
      null
    )
  }

}
