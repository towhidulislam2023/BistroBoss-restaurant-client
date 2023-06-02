import React from 'react';
import useMenu from '../../hooks/useMenu';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const [menu, refetch] = useMenu();
    const handleDelete = (item) => {
        console.log(item._id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(``)
                axiosSecure.delete(`/removeFood/${item._id}`)
                    .then((res) => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch(); // Assuming this function refreshes the menu data
                            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire('Error', 'Failed to delete the item.', 'error');
                    });
            }
        });
    };

    const handleEditMenuItems = () => {
        // Code for handling edit menu items
    };

    return (
        <div className='w-[70%] mx-auto my-10'>
            <div>
                <div className='md:flex space-y-4 justify-between '>
                    <h1 className='text-4xl'>Total orders:{menu.length}</h1>
                    {/* <h1 className="text-4xl">Total:{total}</h1> */}
                </div>

                <div className='overflow-x-auto w-full h-[80vh]  overflow-y-auto'>
                    <table className='table w-full'>
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type='checkbox' className='checkbox' />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th className='text-right'>Price</th>
                                <th className='text-center'>Action</th>
                                <th className='text-center'>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu &&
                                menu.map((menuitem, index) => (
                                    <tr key={menuitem._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className='flex items-center space-x-3'>
                                                <div className='avatar'>
                                                    <div className='mask mask-squircle w-12 h-12'>
                                                        <img src={menuitem.image} alt='Menu Item' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='font-bold'>{menuitem.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-right'>{menuitem.price}</td>
                                        <td className='text-center'>
                                            <button
                                                onClick={() => handleEditMenuItems(menuitem._id)}
                                                className='btn bg-red-400 border-none hover:bg-red-600'
                                            >
                                                <FaRegEdit />
                                            </button>
                                        </td>
                                        <td className='text-center'>
                                            <button
                                                onClick={() => handleDelete(menuitem)}
                                                className='btn bg-red-400 border-none hover:bg-red-600'
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;