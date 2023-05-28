import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { contextProvider } from '../Authprovider';

const useCart = () => {
  const {user} = useContext(contextProvider);

  const {  refetch, data: cart =[]} = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return res.json();
    },
  })
  return [cart, refetch]
};

export default useCart;