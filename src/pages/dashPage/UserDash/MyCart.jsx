import React from 'react';
import useTitle from '../../../components/useTitle';
import useCart from '../../../hooks/useCart';
import Cover from '../../shared/cover/Cover';
import SectionTitle from '../../../components/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    useTitle('my cart');
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
     
    const handleDelete = (id) =>{
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
                fetch(`https://bristo-restaurant-server.vercel.app/carts/${id}`,
                {
                    method: 'delete'
                })
                .then(res =>res.json())
                .then(data =>{ 
                    if(data.deletedCount > 0){
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
        <div className='w-full pt-8'>
            <SectionTitle subheading={'My Cart'} heading={'Wanna add more'}></SectionTitle>
            <div className='flex uppercase justify-evenly items-center mb-6'>
                <h3 className="text-3xl">Total Order: {cart.length}</h3>
                <h3 className="text-3xl">Total price: {total}</h3>
                 <Link to='/dashboard/payment'><button className='btn btn-sm btn-warning'>pay</button></Link>
            </div>

            <div className="overflow-x-auto w-full p-10">
                <table className="table w-full p-8">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((food, i) => <tr key={food._id}>
                                <td>{i + 1}</td>
                                <td><div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={food.image} alt="food" />
                                    </div>
                                </div>   </td>
                                <td>{food.name}</td>
                                <td className='text-end'>${food.price}</td>
                                <td><button onClick={() => handleDelete(food._id)} className='btn btn-error border-none text-red-800 bg-white'><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;