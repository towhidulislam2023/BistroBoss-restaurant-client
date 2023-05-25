import React from 'react';
import DisplayMenu from '../DisplayMenu/DisplayMenu';


const MenuCatagoryDesign = ({items}) => {
    return (
        <section className='grid md:grid-cols-2 gap-10 px-3 my-10'>
            {
                items && items.map(menuItems => <DisplayMenu key={menuItems._id} menu={menuItems}></DisplayMenu>)
            }
        </section>
    );
};

export default MenuCatagoryDesign;