import React from 'react';
import { Parallax } from 'react-parallax';

const MenuCover = ({bannarimg, title, titledesc}) => {
    console.log(bannarimg);
    return (
         <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bannarimg}
        bgImageAlt="as"
        strength={-200}
    >
            <div className="hero h-[40vh] md:h-[70vh]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black px-5 bg-opacity-10 py-10 ">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{titledesc}</p>
                    </div>
                </div>
            </div>
        {/* <div style={{ height: '200px' }} /> */}
    </Parallax>



    );
};

export default MenuCover;