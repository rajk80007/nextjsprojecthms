import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: 'explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/'
        },
    ]

  return (
    <div className='flex justify-between items-center p-2'>
        <div className='flex items-center gap-10'>

        <Link href='/'><Image src='/logo.svg' alt='logo'    
        width={180} height={80} 
        className='px-5 py-2'/> </Link> 
        <ul className='md:flex gap-8 hidden'>
            {Menu.map((item, index) => (
                <Link href={item.path} key={index}>
                <li className='hover:text-primary cursor-pointer hover:scale-x-105 hover:font-bold transition-all ease-in-out'>{item.name}</li>
                </Link>
            ))}
        </ul>
        </div>
        <Button className='mx-7'>Get Started</Button>
    </div>
  )
}

export default Header