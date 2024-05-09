import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Navbar className='border-b-2 justify-between items-center py-3 flex flex-col lg:flex-row'> {/* Added flex and flex-col/lg:flex-row for vertical and horizontal alignment */}
      <Link to="/" className='whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Blog
          </span>
          Market
        </span>
      </Link>
      <div className="flex items-center lg:items-stretch lg:justify-center flex-grow"> {/* Added flex container to center the search box */}
        <form className="relative">
          <TextInput 
            type='text'
            placeholder='Search..'
            // rightIcon={AiOutlineSearch}
            className='hidden lg:inline-block' // Adjusted class for responsiveness
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='grey' pill> 
          <AiOutlineSearch />
        </Button>
      </div>
      <div className=''>
        <button className='w-12 h-10 hidden sm:inline bg-green rounded-full flex items-center justify-center' color='green' pill>
          <FaMoon />
        </button>
        <Link to='Signin'>
          <button className='w-12 h-10 hidden sm:inline' color='green' pill>
            Signin
          </button>
        </Link>
      </div>
    </Navbar>
  );
}
