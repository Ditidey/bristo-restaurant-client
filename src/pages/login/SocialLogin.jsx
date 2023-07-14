import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { contextProvider } from '../../Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleLogin} = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res => {
            const loggedUser = res.user;
            const saveUser ={name: loggedUser.name, email: loggedUser.email, img: loggedUser.photo}
            fetch('https://bristo-restaurant-server.vercel.app/users', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(da => {
             Swal.fire({
                icon: 'success',
                text: 'Login successful',
                timer: 1500,
                showConfirmButton: false
             })
              navigate(from, {replace:true})
          })
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='divider'></div>
            <div className='flex space-x-4 pb-6 ps-40'>

                <FaFacebook className='text-blue-500'></FaFacebook>
                <button onClick={handleGoogleLogin} className='btn'> <FaGoogle className='text-yellow-500'></FaGoogle></button>
                <FaGithub></FaGithub>
            </div>
        </div>
    );
};

export default SocialLogin;