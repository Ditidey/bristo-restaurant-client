import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../Authprovider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUser, userUpdate} = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const saveUser = {name: data.name, email: data.email, img: data.photo}
            userUpdate(data.name, data.photo)
            fetch('https://bristo-restaurant-server.vercel.app/users', {
                  method: 'POST',
                  headers: {'content-type': 'application/json'},
                  body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(da => {
                if(da.insertedId){
                    Swal.fire({
                        text: 'Successful',
                        icon: 'success'
                    })
                }
            })
            .then(()=>{})
            .catch((e)=>{console.log(e)})
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  lg:flex shadow-2xl mx-20">
            <div className="text-center w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Create Account now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card w-1/2  max-w-sm  bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>                       
                        <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                        {errors.name && <span className='text-red-600'>Name is required</span>}
                     </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>                       
                        <input type="text" {...register("photo", { required: true })}   placeholder="photo url" className="input input-bordered" />
                        {errors.photo && <span className='text-red-600'>Photo is required</span>}
                     </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                     </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"cha>Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} name='password' placeholder="password" className="input input-bordered" />                      
                        {errors.password && <span className='text-red-600'>Password is required</span>}
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                        <LoadCanvasTemplate />
                        </label>
                        <input type="text" ref={captchaRef} name='captcha' placeholder="type the above captcha" className="input input-bordered mb-2" />  
                        <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs'>Validate</button>                       
                    </div> */}
                    <div className="form-control mt-6">
                        <button   className="btn btn-primary bg-yellow-700">Sign up</button>
                    </div>
                </form>
                <Link to='/login' className='ms-20 mb-2 text-blue-500'>Already have an account? Login</Link>
                <div className='flex space-x-4 pb-6 ps-40'>
                    
                    <FaFacebook className='text-blue-500'></FaFacebook>
                    <FaGoogle className='text-yellow-500'></FaGoogle>
                    <FaGithub></FaGithub>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;