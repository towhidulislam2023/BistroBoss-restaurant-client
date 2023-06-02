import React from 'react';

const Sectiontitle = ({subHeading , heading}) => {
    return (
        <div className='my-10 mx-auto text-center space-y-3'>
            <h1 className='text-xl text-yellow-700'>----------- {subHeading} -----------</h1>
            <h1 className='text-4xl font-bold  border-l-0 px-6 border-r-0 mx-auto md:w-[40%]
             border-gray-300 border-2 py-3'>{heading}</h1>
        </div>
    );
};

export default Sectiontitle;