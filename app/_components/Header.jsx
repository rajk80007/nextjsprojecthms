"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

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

    const { user } = useKindeBrowserClient();

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className='flex justify-between items-center p-2'>
            <div className='flex items-center gap-10'>

                <Link href='/'><Image src='/logo.svg' alt='logo'
                    width={180} height={80}
                    className='px-5 py-2' /> </Link>
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <li className='hover:text-primary cursor-pointer hover:scale-x-105 hover:font-bold transition-all ease-in-out'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            {user ?

                <Popover>
                    <PopoverTrigger><Image src={user?.picture} alt='profile-image' width={50} height={50}
                        className='rounded-full' /></PopoverTrigger>
                    <PopoverContent className='w-44'> 
                    <ul className='flex flex-col gap-2'>
                    <li className="cursor-pointer hover:bg-slate-100 p-2">Profile</li>
                    <li className="cursor-pointer hover:bg-slate-100 p-2">My Booking</li>
                    <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"> <LogoutLink>Logout </LogoutLink></li>
                    </ul></PopoverContent>
                   
                </Popover>

                // <LogoutLink><Button variant='outline'>Log out</Button></LogoutLink>
                : <LoginLink><Button className='mx-7'>Get Started</Button></LoginLink>
            }
        </div>
    )
}

export default Header