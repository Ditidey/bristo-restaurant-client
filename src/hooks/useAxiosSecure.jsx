
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axios from 'axios';
import { useEffect } from 'react';

const useAxiosSecure = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'https://bristo-restaurant-server.vercel.app',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `beaer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use((response) =>
            response,
            async(error) =>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await logoutUser();
                    navigate('/login')
                }
                return Promise.reject(error);
            }

        )
    }, [logoutUser, navigate, axiosSecure]);

    return[axiosSecure];
};

export default useAxiosSecure;