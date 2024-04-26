import { z } from 'zod';

export const sellerSignupSchema = z.object({
    shopName: z.string().min(1, {
        message: "Shop name must be atleast 1 characters",
    }),
    email: z.string().email({
        message: "Enter a valid email"
    }),
    password: z.string().min(8, {
        message: "Password must be atleast 8 characters",
    })
})

export const sellerSigninSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email"
    }),
    password: z.string().min(8, {
        message: "Password must be atleast 8 characters",
    })
})

export const addProductSchema = z.object({
    title: z.string().min(1, {
        message: "Title must be atleast 1 characters",
    }),
    description: z.string(),
    price: z.string(),
    stock: z.string(),
})

