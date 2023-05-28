import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { contextProvider } from '../../Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    // const captchaRef = useRef();
    const [disable, setDisable] = useState(true);
    const {loginUser} = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result =>{
               console.log(result.user)
               navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    const handleValidateCaptcha = (e) =>{
           const user_captcha =  e.target.value;
           if(validateCaptcha(user_captcha)){
                   setDisable(false)
           }else{
            setDisable(true)
           }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  lg:flex shadow-2xl mx-20">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-1/2  max-w-sm  bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"cha>Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text"  onBlur={handleValidateCaptcha} name='captcha' placeholder="type the above captcha" className="input input-bordered mb-2" />  
                                               
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={false} className="btn btn-primary bg-yellow-700">Login</button>
                        </div>
                    </form>
                    <Link to='/register' className='ms-20 mb-2 text-blue-500'>New to here? create new account</Link>
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

export default Login;