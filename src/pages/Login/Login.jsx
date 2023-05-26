import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/others/authentication1.png';
import { useForm } from 'react-hook-form';
import { AuthProviderContext } from '../../Provider/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [error, setError] = useState("")
    const CaptchaRef = useRef(null)
    const { logInuser } = useContext(AuthProviderContext)
    const [captchamatched, setCaptchaMatch] = useState(true)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        logInuser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate("/")
            })
            .catch(error => setError(error.message))

    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelvalidateCaptcha = () => {

        const User_input_caotcha_value = CaptchaRef.current.value

        console.log(User_input_caotcha_value);
        if (validateCaptcha(User_input_caotcha_value) == true) {
            setCaptchaMatch(false)
            setError("")
        }

        else {
            setError("Wrong Captcha")
            setCaptchaMatch(true)
        }
    }
    return (
        <div className='setbginlogin  rounded-lg flex items-center '>
            <div className='md:mx-32 md:w-[40%]   px-5'>
                <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                    <h5 className='text-2xl mt-2 font-bold'>Login </h5>
                    <p className='text-error font-semibold my-3'>{error}</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='my-12'>


                        <input className='border-l-none border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" {...register("email", { required: "Email Address is required" })} required name='email' placeholder='Username or Email' />
                        {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}




                        <input className='border-l-none border-b-2 mt-10  rounded-md px-5  border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required {...register("password", { required: "Password is required" })} name='password' placeholder='Passowrd' />
                        {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}

                        {/* //captcha  */}
                        <div className='border-4 px-6 py-3 mt-5 bg-gray-200 text-red-700 font-bold'>
                            <LoadCanvasTemplate />
                        </div>
                        <input onBlur={handelvalidateCaptcha} ref={CaptchaRef} className='border-l-none border-b-2 mt-10  rounded-md px-5  border-black border-opacity-5 py-3 outline-none w-full text-black' type="text" name='password' placeholder='Write Captcha Here' />

                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <input type="checkbox" name="checkbox" id="" /> <span className='ml-2'>Remember me</span>
                            </div>
                            <div>
                                <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                            </div>

                        </div>
                        <button disabled={captchamatched} className='btn w-[100%] mx-auto btn-warning mt-10'>Login
                        </button>
                        <p className='text-center my-4'>Dont have an Account ? <Link className='underline text-yellow-600 ' to={'/registar'}>Create an account</Link> </p>
                    </form>
                </div>
                {/* <GoogleGit></GoogleGit> */}
            </div>
            <div>
                <img className='w-[30rem]' src={img1} alt="" />
            </div>
        </div>
    );
};

export default Login;