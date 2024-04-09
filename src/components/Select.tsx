import React from 'react';

import Pune from '../assets/Pune.png';
import Delhi from '../assets/Delhi.png';
import Bengaluru from '../assets/Bengaluru.png';
import Mumbai from '../assets/Mumbai.png';
import Kolkata from '../assets/Kolkata.png';
import Srinagar from '../assets/Srinagar.png';
import SelectsCard from './SelectsCard';

const Selects: React.FC = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard bg={Pune} text='Pune' />
      <SelectsCard bg={Delhi} text='Delhi' />
      <SelectsCard bg={Bengaluru} text='Bengaluru' />
      <SelectsCard bg={Mumbai} text='Mumbai' />
      <SelectsCard bg={Kolkata} text='Kolkata' />
      <SelectsCard bg={Srinagar} text='Srinagar' />
    </div>
  );
};

export default Selects;
