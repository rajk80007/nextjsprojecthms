import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment';

const DoctorDetails = (doctor) => {

    const socialMediaList = [
        {
            id:1,
            icon:'/youtube.png',
            url: ''
        },
        {
            id:2,
            icon:'/facebook.png',
            url: ''
        },
        {
            id:3,
            icon:'/instagram.png',
            url: ''
        }
    ]
    // console.log(doctor.doctor);
  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 border-[1px] border-gray-200 rounded-lg p-5 mt-5'>
          {/* Doctor Image */}
          <div>
                <Image src={doctor.doctor.attributes?.image?.data[0]?.attributes?.url} alt="Doctor Image" width={200} height={150} 
                className='rounded-lg h-[280px] w-full'/>
          </div>
          {/* Doctor Info */}
          <div className='col-span-2 mt-5 mx-5 items-baseline flex flex-col'>
                <h2 className='text-2xl font-bold'>{doctor.doctor.attributes?.Name}</h2>
                <h2 className='flex items-center gap-2 text-gray-500 text-md py-1'>
                    <GraduationCap />
                    <span>{doctor.doctor.attributes?.Year_of_Experience} Year of Experience</span>
                </h2>
                <h2 className='flex items-center gap-2 text-gray-500 text-md py-1'>
                    <MapPin />
                    <span>{doctor.doctor.attributes?.Address}</span>
                </h2>
                <h2 className='text-[12px] font-bold bg-blue-900 rounded-full px-4 py-2 text-secondary'>{doctor.doctor.attributes?.categories?.data?.attributes?.Name}</h2>
                <div className='flex gap-3 mt-5 px-2'>
                    {socialMediaList&&socialMediaList.map((item, index)=>(
                        <Image key={index} src={item.icon} alt="Social Media Icon" width={30} height={30} />
                        
                    ))}
                </div>
                
                <BookAppointment doctor = {doctor} />
          </div>
          {/* About Doctor  */}
          <div className='mt-5 col-span-3'>
            <h2 className='text-2xl font-bold'>About Me</h2>
            <p className='text-gray-500 text-justify'>{doctor.doctor.attributes?.About}</p>
          </div>
        </div>
  )
}

export default DoctorDetails