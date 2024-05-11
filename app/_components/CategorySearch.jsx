"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';

const CategorySearch = () => {


  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList()
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
    <div className='mb-10 items-center flex flex-col bg-gray-200 p-10 rounded-xl'>
      <h2 className='font-bold text-4xl '>Search
        <span className='text-primary'> Doctors</span> </h2>
      <h2>Search your doctor and Book Appointment</h2>
      <div className="flex w-full max-w-sm items-center space-x-2 p-5">
        <Input type="text" placeholder="Search" />
        <Button type="submit">
          <Search className='h-4 w-4 mr-2' />Search</Button>
      </div>
      {/* Display List of Category */}

      <div className='grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-6 '>


        {categoryList.length>0?categoryList.map((item, index) => index<6 && (
            <Link href={'/search/'+item.attributes?.Name}>
          <div key={index} className='flex flex-col text-center items-center gap-2 p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'>
            <Image src={item.attributes?.Icon?.data[0].attributes.url}
              alt='icon'
              width={40}
              height={40} />
            <label className='text-blue-600 text-sm'>{item.attributes.Name}</label>
          </div>
              </Link>
        )) : 
        [1,2,3,4,5,6].map((item, index)=>(
        <div className='h-[100px] w-[100px] rounded-lg bg-white m-2 animate-pulse'>

        </div>
       )) }

      </div>
    </div>
  )
}

export default CategorySearch