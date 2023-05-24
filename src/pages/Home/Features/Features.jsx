import React from 'react';
import Sectiontitle from '../../../sheared/SectionTitle/Sectiontitle';
import bannar from '../../../assets/home/featured.jpg';

const Features = () => {
    return (
        <div className='setFeaturesbg my-10'>
            <div className='text-white py-10'>
                <Sectiontitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></Sectiontitle>
            </div>
            <section className='flex justify-center items-center text-white  gap-5'>
              <div>
                    <img className='h-80' src={bannar} alt="" />
              </div>
              <div className='w-[30%]'>
                    <h1 className="text-xl">March 20, 2023</h1>
                    <h1 className="text-xl">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
              </div>
            </section>
            
        </div>
    );
};

export default Features;