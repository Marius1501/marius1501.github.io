import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {

    return (
        <header className='p-5 flex text-lg md:text-xl lg:text-2xl text-white tracking-wider font-light'>
            <nav className='flex-1'>
                <ul className='flex justify-center gap-10 md:gap-15 lg:gap-20'>
                    <li>
                        <Link href="/" className='transition-colors duration-200 ease-in-out hover:text-orange-400'>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className='transition-colors duration-200 ease-in-out hover:text-orange-400'>More About Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
