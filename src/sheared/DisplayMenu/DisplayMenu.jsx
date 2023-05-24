import React from 'react';

const DisplayMenu = ({menu}) => {
    const { _id, name, recipe, image, price }=menu
    return (
        
       <div>
            <div className='flex items-center gap-10'>
                <img style={{ borderRadius: "0px 200px 200px 200px" }} className='h-[104px] w-[118px] ' src={image} alt="" />
                <div>
                    <p className='text-xl'>{name} ------------------</p>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
       </div>
    );
};

export default DisplayMenu;