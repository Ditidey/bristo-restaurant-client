import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const ManageItems = () => {
    const [menu, , refetch] = useMenu();
     const  [axiosSecure] = useAxiosSecure();

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                         refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
             
            }
          })
    }
    return (
        <div className='w-full'>
            <SectionTitle heading={'Manage items'} subheading={'Hurry up'}></SectionTitle>

            <div class="overflow-x-auto">
                <table class="table">

                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, i) => <tr key={item._id}>
                            <th>
                                {i + 1}
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className='text-right'> {item.price}</td>
                            <td>
                                <button class="btn btn-xs bg-white"><FaEdit className='w-6 h-4 text-yellow-300'></FaEdit></button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className='btn btn-error border-none text-red-800 bg-white'><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;