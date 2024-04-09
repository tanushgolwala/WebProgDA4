import React from 'react';


import Pune from '../assets/Pune.png';
import Delhi from '../assets/Delhi.png';
import Bengaluru from '../assets/Bengaluru.png';
import Mumbai from '../assets/Mumbai.png';
import Kolkata from '../assets/Kolkata.png';
import Srinagar from '../assets/Srinagar.png';

const Destinations: React.FC = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Srinagar} alt="/" />
            <img className='w-full h-full object-cover' src={Delhi} alt="/" />
            <img className='w-full h-full object-cover' src={Pune} alt="/" />
            <img className='w-full h-full object-cover' src={Kolkata} alt="/" />
            <img className='w-full h-full object-cover' src={Bengaluru} alt="/" />
        </div>
    </div>
  );
};

export default Destinations;
