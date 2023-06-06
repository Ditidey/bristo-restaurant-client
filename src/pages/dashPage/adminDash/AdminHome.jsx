import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async ()=>{
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            
            <h2 className='text-3xl'>Welcome Back, {user?.displayName}</h2>

            <div className='m-8 py-6 md:flex space-x-3 bg-slate-50 '>
                <div className='bg-red-100 p-10 text-center '>
                    <h2 className='text-3xl font-serif mb-5'>Revenue</h2>
                <h2>${stats?.revenue}</h2>
                </div>
                <div className='bg-yellow-100 p-10 text-center '>
                <h2 className='text-3xl font-serif mb-5'>Customers</h2>
                <h2>{stats?.users}</h2>
                </div>
                <div className='bg-green-100 p-10 text-center '>
                <h2 className='text-3xl font-serif mb-5'>Menu Items</h2>
                <h2>{stats?.menuItems}</h2>
                </div>
                <div className='bg-blue-100 p-10 text-center '>
                <h2 className='text-3xl font-serif mb-5'>Orders</h2>
                <h2>{stats?.orders}</h2>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;