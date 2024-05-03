import { Title } from '@/components/elements'
import React from 'react'

export default function NotFound() {
  return (
    <div className=' w-full min-h-screen flex flex-col gap-4 justify-center items-center'>
      
      <Title title={`404 Not Found`} classname={` text-4xl`} />
      <img
        src='images/not-found.png'
        alt='not found image'
        className=' h-[80%]'
        draggable='false'
      />

    </div>
  )
}
