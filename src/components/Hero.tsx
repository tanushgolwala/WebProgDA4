import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../assets/beachVid.mp4';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/find?query=${searchValue}`;
  };

  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations Worldwide</h2>
        <form
          onSubmit={handleSearch} // Call handleSearch on form submission
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'
              type='text'
              placeholder='Search Destinations'
              value={searchValue} // Bind input value to searchValue state
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>
            {/* Use button type="submit" to submit the form */}
            <button type='submit'>
              <AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
