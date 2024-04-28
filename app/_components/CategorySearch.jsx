import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react'

const CategorySearch = () => {
  return (
    <div className='mb-10 items-center flex flex-col bg-gray-200 p-10 rounded-xl'>
        <h2 className='font-bold text-4xl '>Search 
        <span className='text-primary'> Doctors</span> </h2> 
            <h2>Search your doctor and Book Appointment</h2>   
        <div className="flex w-full max-w-sm items-center space-x-2 p-5">
      <Input type="text" placeholder="Search" />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2'/>Search</Button>
    </div>
        
    </div>
  )
}

export default CategorySearch