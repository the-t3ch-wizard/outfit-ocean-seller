import { Loader } from '@/components/elements';
import ProductsDetails from '@/components/elements/ProductDetails'
import { getProductData } from '@/lib/appwrite/api';
import { useGetProductData } from '@/lib/react-query/queriesAndMutations';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductsDetail() {
  const id = useParams();

  const { mutateAsync: getProductData, isPending: isGettingProductData, isSuccess } = useGetProductData();

  const [productData, setProductData] = useState(undefined);

  useEffect(() => {
    getProductData(id)
    .then((prod) => setProductData(prod))
    .catch((err) => console.log(err))
  }, [])

  if (isGettingProductData){
    return (
      <div className=' w-full min-h-screen flex justify-center items-center'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div>
        <ProductsDetails product={productData} />
      </div>
    )
  }
}
