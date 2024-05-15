import { Loader, ProductsCard, NotFound } from '@/components/elements';
import { useUserContext } from '@/context/AuthContext';
import { useGetRecentSellerProducts } from '@/lib/react-query/queriesAndMutations'
import { productsAtom } from '@/store/atoms/atoms';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';

export default function Home() {
  const { mutateAsync: getRecentSellerProducts, isPending: isLoadingProducts } = useGetRecentSellerProducts();

  const { user, isLoading } = useUserContext();

  const [products, setProducts] = useRecoilState(productsAtom);

  useEffect(() => {
    getRecentSellerProducts({
      sellerId: user.id
    })
    .then((prod) => setProducts(prod.documents))
    .catch((error) => console.log(error))
  }, [user])

  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center relative bg-background'>
          
      {
        isLoadingProducts ? (
          <Loader />
        ) : (
          <ul className=' w-full min-h-screen p-4 text-foreground flex gap-4 flex-wrap'>
            {
              products.length===0 ?
              <NotFound /> :
              products.map((product, index) => <li key={index}>
                <ProductsCard key={product.title} product={product} />
              </li>)
            }
          </ul>
        )
      }

    </div>
  )
}
