import { useUserContext } from '@/context/AuthContext'
import React from 'react'
import { Description, QuantityButton, Title } from '.';
import { Button } from '../ui/button';

export default function ProductsDetails({ product }) {
  const { user } = useUserContext();

  if (product){
    return (
      <div className=' w-full bg-card border p-4 border-border flex justify-start items-start rounded-md'>
        
        <div className=' w-[50%] min-h-96'>
          <img
            src={product.imageUrl}
            alt='product image'
            className=' rounded-md '
          />
        </div>
        <div className=' w-[50%] flex flex-col gap-2 min-h-96 justify-start items-start p-4'>
          <Description description={user.shopName} classname={` text-primary/80 uppercase`} />
          <Description description={product.title} classname={` text-primary text-2xl`} />
          <Description description={`₹ `+product.price+` M.R.P.`} classname={` text-primary text-xl`} />
          <Description description={`(incl. of all taxes)`} classname={` text-primary`} />
          
          <div className=' w-full flex justify-center items-center'>
            <div className=' w-[90%] border-b border-border'></div>
          </div>
          
          <QuantityButton />
  
          <div className=' flex flex-col gap-4 justify-between items-center w-full'>
            <Button className='w-full'>Add to Cart</Button>
            <Button className='w-full' variant="outline">Proceed to Buy</Button>
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
