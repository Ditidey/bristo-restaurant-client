import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { contextProvider } from '../Authprovider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
  const {user, loading} = useContext(contextProvider);
  // const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure();

  const {  refetch, data: cart =[]} = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    // queryFn: async ()=>{
    //     const res = await fetch(`https://bristo-restaurant-server.vercel.app/carts?email=${user?.email}`, {
    //       headers: {authorization: `bearer ${token}`}
    //     })
    //     return res.json();
    // },
     queryFn: async ()=>{
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      // console.log('res from cart', res);
      return res.data;
     }
  })
  return [cart, refetch]
};

export default useCart;