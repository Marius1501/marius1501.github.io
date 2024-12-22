import React from 'react';
import Link from 'next/link';
import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon';

const Footer: React.FC = () => {
    return (
        <footer className='flex flex-col items-center gap-2 p-2'>
            <div>
                <p className='text-sm md:text-base'>Contact Me</p>
            </div>
            <div className='flex items-center gap-4'>
                <Link href="https://github.com">
                    <GithubIcon />
                </Link>
                <Link href="https://linkedin.com">
                    <LinkedinIcon />
                </Link>
            </div>
            <div>
                <p className='text-xs md:text-sm'>&copy; 2024; All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
