import React, { useContext } from 'react';
import { contextProvider } from '../Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const CardFood = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const {user} = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart();

    const handleAddToCart = item =>{
        if(user && user.email){
            const cartItem = {foodId: _id, email: user.email, name, price, image, recipe}
            fetch('http://localhost:5000/carts',{
                method: 'post',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your item has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to add it cart!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state :{from:location}})
                }
              })
        }
    }
    return (

        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-800 text-white absolute right-0 px-4 mt-6 mr-6 rounded-sm'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-end px-40 pb-4">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-300 text-yellow-600 border-0 border-b-4 border-yellow-600 text-center ms-96 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default CardFood;