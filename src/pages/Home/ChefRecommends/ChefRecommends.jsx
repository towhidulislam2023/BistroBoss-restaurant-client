import React from 'react';
import useMenu from '../../../hooks/useMenu';
import Sectiontitle from '../../../sheared/SectionTitle/Sectiontitle';
import MenuCard from '../../../sheared/MenuCard/MenuCard';

const ChefRecommends = () => {
    const [menu] = useMenu()
    const ChefRecommends = menu && menu.filter(food => food.category === "offered")
    console.log(ChefRecommends);
    return (
        <div>
            <Sectiontitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></Sectiontitle>

            <section className='grid md:grid-cols-4 gap-10'>
                {
                    ChefRecommends && ChefRecommends.map(menuItems=><MenuCard menu={menuItems} key={menuItems._id}></MenuCard>)
                }
            </section>
            
        </div>
    );
};

export default ChefRecommends;