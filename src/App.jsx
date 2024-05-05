import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddProduct, Customers, Home, NotFound, Orders, Product, ProductsDetail, Signin, Signup } from './pages'
import { AuthLayout, RootLayout } from './components/elements'
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <div className=' w-full font-geist'>

      <Routes>
        
        <Route element={<AuthLayout />} >
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Route>

        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductsDetail />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/order' element={<Orders />} />
        </Route>

        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Toaster />
    </div>
  )
}
