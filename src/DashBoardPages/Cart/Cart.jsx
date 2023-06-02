import React from 'react';
import useCart from '../../hooks/useCart';
import MenuCard from '../../sheared/MenuCard/MenuCard';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart,refetch]=useCart()
    const total=cart.reduce((sum,item)=>item.price + sum ,0)
    const handelDelletFromCart=(id)=>{
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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                        console.log(data);
                    })
            }
        })


        

    }
    return (
        <div className='w-[70%] mx-auto my-10'>
           <div>
            <div className='md:flex space-y-4 justify-between '>
                    <h1 className="text-4xl">Total orders:{cart.length}</h1>
                    <h1 className="text-4xl">Total:{total}</h1>

            </div>
                
                <div className="overflow-x-auto w-full h-[80vh]  overflow-y-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th className='text-right'>Price</th>
                                <th className='text-center'>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart && cart.map((cartproduct,index) => <tr key={cartproduct._id}>
                                    <th>
                                       {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cartproduct.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cartproduct.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-right'>
                                        {cartproduct.price}
                                    </td>
                                    <td className='text-center'><button onClick={()=>handelDelletFromCart(cartproduct._id)} className='btn bg-red-400 border-none hover:bg-red-600'><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }
                            
                            
                        </tbody>

                    </table>
                </div>
           </div>
        </div>
    );
};

export default Cart;