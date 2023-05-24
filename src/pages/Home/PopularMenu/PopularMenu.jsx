import React from 'react';
import useMenu from '../../../hooks/useMenu';
import Sectiontitle from '../../../sheared/SectionTitle/Sectiontitle';
import DisplayMenu from '../../../sheared/DisplayMenu/DisplayMenu';

const PopularMenu = () => {
    const [menu]=useMenu()
    const popularMenu = menu && menu.filter(food => food.category ==="popular")
    console.log(popularMenu);
    return (
        <div>
            <Sectiontitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></Sectiontitle>
            <section className='grid md:grid-cols-2 gap-10 px-3'>
                {
                    popularMenu&&popularMenu.map(menuItems=><DisplayMenu key={menuItems._id} menu={menuItems}></DisplayMenu>)
                }
            </section>
            <div className='text-center my-12'>
                <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;