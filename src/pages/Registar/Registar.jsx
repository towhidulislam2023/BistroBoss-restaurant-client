import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../assets/others/authentication.gif';
import { useForm } from 'react-hook-form';
import { AuthProviderContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Registar = () => {
    const { signupuser, updateUserinfo }=useContext(AuthProviderContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
    const onSubmit = (data) => {
        console.log(data);
        signupuser(data.email,data.password)
        .then(result=>{
            console.log(result.user);
            updateUserinfo(data.name,data.url)
            const userInfo={email:data.email , name:data.name}
            fetch("http://localhost:5000/users",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(userInfo)

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
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
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='setbginlogin mb-10 rounded-lg flex items-center '>
            <div className='md:mx-32 md:w-[40%] py-32  px-5'>
                <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                    <h5 className='text-2xl mt-2 font-bold'>Signup</h5>
                    <p className='font-semibold text-error my-3'>{ }</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='my-12'>

                        {/* name */}
                        <input className='border-l-none border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' {...register("name", { required: "Name is required" })} name='name' placeholder='Your Name' />
                        {errors.name && <p className='text-err' role="alert">{errors.name?.message}</p>}

                        {/* Email */}
                        <input className='border-l-none border-b-2 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' {...register("email", { required: "Email Address is required" })} name='email' placeholder='Username or Email' />
                        {errors.email && <p className='text-err' role="alert">{errors.email?.message}</p>}


                        {/* PhotoUrl */}
                        <input className='border-l-none border-b-2 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' {...register("url")} name='url' placeholder='PhotoUrl' />

                        {/* password */}
                        <input className='border-l-none border-b-2 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' {...register("password" ,
                            { pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ }, )} name='password' placeholder='Passowrd' />
                        {errors.password?.type === "pattern" && <p className='text-err' role="alert"> Password must have one Uppercase one lower case, one number and one special character.</p>}


                        {/* ConfirmPassword */}
                        {/* <input className='border-l-none border-b-2 mt-10 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='ConfirmPassword' placeholder='Confirm Passowrd' /> */}



                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <input type="checkbox" name="checkbox" id="" /> <span className='ml-2'>Remember me</span>
                            </div>
                            <div>
                                <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                            </div>

                        </div>


                        <button className='btn w-[100%] mx-auto btn-warning mt-10'>Registar
                        </button>
                        <p className='text-center my-4'>Alrady have an account ? <Link className='underline text-yellow-600 ' to={'/login'}>Please Login</Link> </p>
                    </form>
                </div>

            </div>
            <div>
                <img className='w-[50rem] mr-7' src={img1} alt="" />
            </div>
        </div>
    );
};

export default Registar;