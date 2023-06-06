import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
    const location = useLocation();
    if(loading){
        return <p className='animate-bounce'>Loading.....</p>
    }
    if(user){
        return children;
    }
    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default ProtectedRoute;