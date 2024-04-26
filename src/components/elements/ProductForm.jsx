import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addProductSchema } from '@/lib/validation'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FileUploader from './FileUploader'
import { useAddProduct } from '@/lib/react-query/queriesAndMutations'
import { useToast } from '../ui/use-toast'
import { useNavigate } from 'react-router-dom'
import { Loader } from '.'
import { useUserContext } from '@/context/AuthContext'

export default function ProductForm({ className }) {
  const navigate = useNavigate();

  const { toast } = useToast();

  const { user } = useUserContext();
  
  const { mutateAsync: addProduct, isPending: isAddingProduct } = useAddProduct();

  const [file, setFile] = useState([]);

  const form = useForm({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: '',
      description: '',
      price: '',
      stock: '',
    }
  })

  async function onSubmit(values){
    console.log(values);
    console.log(file);
    const product = await addProduct({
      sellerId: user.id,
      values,
      file,
    });
    if (!product){
      return toast({
        title: "Please try again ⚠️"
      })
    } else {
      toast({
        title: "Product added successfully ✅"
      })
      navigate('/');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full flex flex-col justify-center gap-3 ${className}`}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stock"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock</FormLabel>
              <FormControl>
                <Input placeholder="" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Image</FormLabel>
              <FormControl>
                <FileUploader
                  setFiles={setFile}
                  mediaUrl={null}
                  // mediaUrl => for edit purpose and preview purpose
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-32'>
          {
            isAddingProduct ? (
              <div className=' flex gap-1 justify-center items-center'>
                <Loader />
                Adding
              </div>
            ) : (
              <div className=' flex justify-center items-center'>
                Submit
              </div>
            )
          }
        </Button>
      </form>
    </Form>
  )
}
