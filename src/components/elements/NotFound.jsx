import React from 'react'
import { Title } from '.'

export default function NotFound() {
  return (
    <div className=' w-full flex flex-col justify-center items-center'>
      <img
        src='/images/not-found.png'
        alt='not found image'
        className=''
        draggable='false'
      />
      <Title title={`Your don't have any products`} classname={` font-medium text-3xl`} />
    </div>
  )
}
