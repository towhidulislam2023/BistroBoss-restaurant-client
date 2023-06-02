import React from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const GoogleGit = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const { handelGoogleLogin } = useContext(AuthProviderContext)
    const handelLoginByGoogle = () => {
        handelGoogleLogin()
            .then(result => {
                const data=result.user
                const userInfo = { email: data.email, name: data.displayName }
                console.log(userInfo);
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)

                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true })
                        }
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=' mb-10 mx-auto px-6 md:px-0'>
            <>
                <hr className='border my-5 border-gray-400  mx-auto' />
                <button onClick={handelLoginByGoogle} className='btn flex w-[100%] mx-auto bg-transparent mt-5 text-black hover:bg-transparent'>
                    <span className=''><FaGoogle className='text-blue-600 text-2xl '></FaGoogle></span>  <span className='flex-grow'>Continue with Google </span>
                </button>
                {/* <button onClick={handelLoginByGit} className='btn w-[100%] mb-10 mx-auto btn-black bg-transparent mt-5 text-black hover:bg-transparent'>
                    <span className=''><FaGithub className='text-black text-2xl '></FaGithub></span>  <span className='flex-grow'>Continue with GitHub </span>
                </button> */}
            </>
        </div>
    );
};

export default GoogleGit;