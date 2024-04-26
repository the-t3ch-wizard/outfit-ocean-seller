import { ProductForm, Title } from '@/components/elements'
import React from 'react'

export default function AddProduct() {
  return (
    <div className=' w-full min-h-screen flex flex-col justify-start items-start p-5 gap-4 relative bg-background'>
          
      <Title title={`Add Product`} />
      <ProductForm className='w-full' />

    </div>
  )
}
