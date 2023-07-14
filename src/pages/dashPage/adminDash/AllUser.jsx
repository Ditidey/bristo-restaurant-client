import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../components/useTitle';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUser = () => {
    useTitle('all user')
    const [axiosSecure] = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({queryKey:['users'], queryFn: async()=>{
        const res = await axiosSecure('/users')
        return res.data;
    }})


     const handleAdminRole = user =>{
         fetch(`https://bristo-restaurant-server.vercel.app/users/admin/${user._id}`,
         {
            method: 'PATCH'
         })
         .then(res => res.json())
         .then(data =>{
            if(data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    icon: 'success',
                    text: 'Admin made',
                    timer: 1500
                })
            }
         })
     }

    const handleDelete = id =>{

    }
    return (
        <div>
            <h3 className='text-3xl uppercase text-center my-4'>Total User: {users.length}</h3>

            <div className="overflow-x-auto w-full p-10">
                <table className="table w-full p-8">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.email}</td>
                                <td className='text-end'>{user.name}</td>
                                <td className='text-end'> <button onClick={()=>handleAdminRole(user)} className='btn btn-warning border-none'>{user.role === 'Admin' ? 'Admin' : <FaUsers></FaUsers>}</button></td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-error border-none text-red-800 bg-white'><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUser;