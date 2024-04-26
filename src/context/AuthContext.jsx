import { getCurrentSeller } from '@/lib/appwrite/api';
import { sellerId } from '@/store/atoms/atoms';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export const INITIAL_USER = {
  id: '',
  shopName: '',
  email: '',
  imageUrl: '',
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setSellerId = useSetRecoilState(sellerId);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentSeller();
      if (currentAccount){
        setUser({
          id: currentAccount.id,
          shopName: currentAccount.shopName,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
        })
        setSellerId(currentAccount.$id);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cookieFallback = localStorage.getItem('cookieFallback');
    if (cookieFallback === "[]" || cookieFallback === null || cookieFallback === undefined){
      navigate('/signin');
    }
    checkAuthUser();
  }, [])

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);