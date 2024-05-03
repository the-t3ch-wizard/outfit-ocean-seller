import { ID, Query } from 'appwrite';
import { account, appwriteConfig, avatars, databases, storage } from "./config";

export async function signupSellerAccount(payload){
  try {
    
    const newSeller = await account.create(
      ID.unique(),
      payload.email,
      payload.password,
      payload.shopName,
    );
    if (!newSeller) throw Error;
    const avatarUrl = avatars.getInitials(payload.shopName);
    const seller = await saveSellerToDb({
      accountId: newSeller.$id,
      shopName: payload.shopName,
      email: payload.email,
      imageUrl: avatarUrl.href,
    })
    return seller;

  } catch (error) {
    console.log(error);
  }
}

export async function saveSellerToDb(payload){
  try {
    
    const seller = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.sellerCollectionId,
      payload.accountId,
      {
        accountId: payload.accountId,
        shopName: payload.shopName,
        email: payload.email,
        imageUrl: payload.imageUrl,
      }
    )
    if (!seller) throw Error;
    return seller;

  } catch (error) {
    console.log(error);
  }
}

export async function signinSellerAccount(payload){
  try {
    
    const session = await account.createEmailSession(
      payload.email,
      payload.password
    );
    if (!session) throw Error;
    return session;

  } catch (error) {
    console.log(error);
  }
}

export async function signoutSellerAccount(){
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentSeller(){
  try {
    
    const sellerAccount = await account.get();
    if (!sellerAccount) throw Error;
    const avatarUrl = avatars.getInitials(sellerAccount.name);
    return {
      id: sellerAccount.$id,
      shopName: sellerAccount.name,
      email: sellerAccount.email,
      imageUrl: avatarUrl.href,
    };

  } catch (error) {
    console.log(error);
  }
}

export async function addProduct(payload){
  try {
    
    const uploadedFile = await saveProductImage(payload.file);
    const filePreviewUrl = await getImagePreviewUrl(uploadedFile.$id);
    const product = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      ID.unique(),
      {
        title: payload.values.title,
        description: payload.values.description,
        price: Number(payload.values.price),
        stock: Number(payload.values.stock),
        imageId: uploadedFile.$id,
        imageUrl: filePreviewUrl.href,
        sellerId: payload.sellerId,
      }
    )
    if (!product) throw Error;
    return product;

  } catch (error) {
    console.log(error);
  }
}

export async function getImagePreviewUrl(fileId){
  try {
    
    const previewUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      "bottom",
      100,
    );
    if (!previewUrl) throw Error;
    return previewUrl;

  } catch (error) {
    console.log(error);
  }
}

export async function saveProductImage(file){
  try {
    
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file[0]
    );
    if (!uploadedFile) throw Error;
    return uploadedFile;

  } catch (error) {
    console.log(error);
  }
}

export async function getRecentSellerProducts(payload){
  try {
    
    if (payload && payload.sellerId && payload.sellerId!=='') throw Error;
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      [
        Query.equal("sellerId", payload.sellerId)
      ]
    )
    if (!products) throw Error;
    return products;

  } catch (error) {
    console.log(error);
  }
}

export async function getProductData(payload){
  try {
    
    const productData = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.productCollectionId,
      payload.id
    )
    if (!productData) throw Error;
    return productData;

  } catch (error) {
    console.log(error);
  }
}

