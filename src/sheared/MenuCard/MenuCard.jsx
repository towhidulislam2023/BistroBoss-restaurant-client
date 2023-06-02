import React, { useContext } from 'react';
import { AuthProviderContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const MenuCard = ({menu}) => {
    const {user}=useContext(AuthProviderContext)
    const { _id, name, recipe, image, price } = menu 
    const [card , refetch]=useCart()
    // console.log(card);
    const handelAddToCart=(item)=>{
        const { _id, name, recipe, image, price } = item 
        if (user && user.email) {
            const addedIems = { menuId: _id, name, image,price, email:user?.email}
            console.log(addedIems);
            fetch('http://localhost:5000/carts' ,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(addedIems)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if (data.insertedId) {
                    refetch()
                    Swal.fire(
                        'Good job!',
                        'You Added The product!',
                        'success'
                    )
                    
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 h-[30rem] bg-base-300 shadow-xl">
                <figure className="px-10 pt-10 rounded-lg">
                    <img  src={image} alt="Shoes" className="rounded-lg" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={()=>handelAddToCart(menu)} className="btn btn-outline btn-warning border-0 border-b-4 btn-block">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;