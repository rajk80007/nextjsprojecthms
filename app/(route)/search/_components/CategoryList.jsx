"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
  
function CategoryList () {

    const [categoryList, setCategoryList] = useState([]);

    const params = usePathname();
    const category = params.split('/')[2];

    useEffect(() => {
      getCategoryList();
    }, [])
  
    const getCategoryList = () => {
      GlobalApi.getCategory().then(resp => {
        setCategoryList(resp.data.data);
        console.log(resp.data.data);
      }).catch((error) => {
        console.log(error)
      })
    }
  return (
    <div className='ml-10 h-screen mt-5 flex flex-col '>
        <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
        {categoryList&&categoryList.map((item, index) => (
            
      <CommandItem key={index} >
            <Link href={'/search/'+item.attributes?.Name} 
            className={`p-2 flex gap-2 text-[14px] text-blue-600 rounded-md cursor-pointer w-full items-center
            ${category==item.attributes.Name&&'bg-blue-200'}`}>
            <Image src={item.attributes?.Icon?.data[0].attributes.url}
              alt='icon'
              width={25}
              height={25} 
              />
            <label className='text-blue-600 text-sm'>{item.attributes.Name}</label>
            </Link>
      
        
      </CommandItem>
        ))}
    </CommandGroup>
   
  </CommandList>
</Command>

    </div>
  )
}

export default CategoryList