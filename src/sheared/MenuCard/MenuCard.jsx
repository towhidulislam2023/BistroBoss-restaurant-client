import React from 'react';

const MenuCard = ({menu}) => {
    const { _id, name, recipe, image, price } = menu
    return (
        <div>
            <div className="card w-96 h-[28rem] bg-base-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-warning border-0 border-b-4 btn-block">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;