import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { addProduct, getProductData, getRecentSellerProducts, signinSellerAccount, signoutSellerAccount, signupSellerAccount } from '../appwrite/api'

const QUERY_KEY = {
  getRecentSellerProducts: "getRecentSellerProducts",
}

export const useSignupSellerAccount = () => {
  return useMutation({
    mutationFn: (payload) => signupSellerAccount(payload)
  })
}

export const useSigninSellerAccount = () => {
  return useMutation({
    mutationFn: (payload) => signinSellerAccount(payload)
  })
}

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => addProduct(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.getRecentSellerProducts]
      })
    }
  })
}

export const useSignoutSellerAccount = () => {
  return useMutation({
    mutationFn: () => signoutSellerAccount()
  })
}

export const useGetRecentSellerProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => getRecentSellerProducts(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.getRecentSellerProducts]
      })
    }
  })
}

export const useGetProductData = () => {
  return useMutation({
    mutationFn: (id) => getProductData(id)
  })
}


// get recent product

// export const useCreateUserAccount = () => {
//   return useMutation({
//     mutationFn: (payload) => createUserAccount(payload)
//   })
// }

// export const useSigninUserAccount = () => {
//   return useMutation({
//     mutationFn: (payload) => signinUserAccount(payload)
//   })
// }

// export const useSignOutUserAccount = () => {
//   return useMutation({
//     mutationFn: signOutUserAccount
//   })
// }

// export const useCreatePost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (payload) => createPost(payload),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: 'getRecentPosts'
//       })
//     }
//   })
// }

// export const useGetRecentPosts = () => {
//   return useQuery({
//     queryKey: ['getRecentPosts'],
//     queryFn: getRecentPosts,
//   })
// }

// export const useLikePost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ postId, likesArray }) => likePost(postId, likesArray),
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({
//         queryKey: ['getPostById', data?.$id]
//       });
//       queryClient.invalidateQueries({
//         queryKey: ['getRecentPosts']
//       });
//       queryClient.invalidateQueries({
//         queryKey: ['getPosts']
//       });
//       queryClient.invalidateQueries({
//         queryKey: ['getCurrentUser']
//       });
//     }
//   })
// }

// export const useSavePost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ postId, userId }) => savePost(postId, userId),
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({
//         queryKey: ['getRecentPosts']
//       })
//       queryClient.invalidateQueries({
//         queryKey: ['getPosts']
//       })
//       queryClient.invalidateQueries({
//         queryKey: ['getCurrentUser']
//       })
//     }
//   })
// }

// export const useDeleteSavedPost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ savedPostId }) => deleteSavedPost(savedPostId),
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({
//         queryKey: ['getRecentPosts']
//       })
//       queryClient.invalidateQueries({
//         queryKey: ['getPosts']
//       })
//       queryClient.invalidateQueries({
//         queryKey: ['getCurrentUser']
//       })
//     }
//   })
// }

// export const useGetCurrentUser = () => {
//   return useQuery({
//     queryKey: ['getCurrentUser'],
//     queryFn: getCurrentUser,
//   });
// }

// export const useGetPostById = (postId) => {
//   return useQuery({
//     queryKey: ["getPostById", postId],
//     queryFn: () => getPostById(postId)
//   })
// }

// export const useUpdatePost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({data, post}) => updatePost({data, post}),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ['getPostById']
//       })
//     }
//   })
// }

// export const useDeletePost = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (payload) => deletePost(payload),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ['getRecentPosts']
//       })
//       queryClient.invalidateQueries({
//         queryKey: ['getCurrentUser']
//       })
//     }
//   })
// }

