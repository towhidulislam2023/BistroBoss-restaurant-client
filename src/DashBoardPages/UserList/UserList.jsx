import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaGrinSquintTears, FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UserList = () => {
const [axiosSecure]=useAxiosSecure()
    const {data:users=[],refetch}=useQuery(['users'], async()=>{
        const res = await axiosSecure.get("/users")
        return res.data  
    })
    console.log(users);
    const handelMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:"PATCH",
            // headers:{
            //     "content-type":"application/json"
            // },

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount>0) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} , Now A Admin Of Bistro Boss`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    const handelRemoveAdminAccess=(user)=>{
        fetch(`http://localhost:5000/users/removeAdmin/${user._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({role:"user"})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount>0) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user?.name} has been Remove From Admin Panel`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        
    }
    const handelDelete =(id)=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `User has been Remove From Bistro  Boss`,
                showConfirmButton: false,
                timer: 1500
            })
            console.log(data);
            
        })
    }
    return (
        <div>
            <div className='w-[70%] mx-auto my-10'>
                <div>
                    <div className='md:flex space-y-4 justify-between '>
                        <h1 className="text-4xl">Total User:{users.length}</h1>
                        {/* <h1 className="text-4xl">Total:{total}</h1> */}

                    </div>

                    <div className="overflow-x-auto w-full h-[80vh]  overflow-y-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead className=''>
                                <tr className=''>
                                    <th>
                                        #
                                    </th>
                                    <th>Email</th>
                                    <th className=''>Name</th>
                                    <th className=''>Role</th>
                                    <th className=''>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(users) && users.map((user, index) => <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td className=''>
                                            {user.email}
                                        </td>
                                        <td className=''>
                                            {user.name}
                                        </td>
                                        <td className='text-center'>
                                            {
                                                user.role && user?.role === "admin" ? <>
                                                    <p>"Admin"</p>
                                                    <button disabled={user.haveSpacialPower==="true"} onClick={()=>handelRemoveAdminAccess(user)}  className='text-red-500'>Remove Admin Access</button>
                                                </> : <button onClick={() => handelMakeAdmin(user)} className='btn bg-red-400 border-none hover:bg-red-600'><FaUser></FaUser></button>
                                            }
                                            
                                          </td>
                                        <td className='text-center'><button onClick={()=>handelDelete(user._id)} disabled={user.haveSpacialPower === "true"} className='btn bg-red-400 border-none hover:bg-red-600'><FaTrashAlt></FaTrashAlt></button></td>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;