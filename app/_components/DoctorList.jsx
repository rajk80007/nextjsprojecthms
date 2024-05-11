import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link'

const DoctorList = ({ doctorList, heading='Popular Doctors' }) => {
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-3xl'>{heading}</h2>
      <div className='mt-5 grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 '>
        {doctorList.length > 0 ? doctorList.map((doctor, index) => (
          <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-lg transition-all ease-in-out' key={index}>
            <Image src={doctor.attributes?.image?.data[0]?.attributes?.url}
              alt='doctor'
              width={200}
              height={200}
              className='h-[200px] w-[250px]  rounded-lg m-2'
            />
            <div className='text-center font-bold text-xl bg-blue-100 text-primary rounded-full items-base'>
              {doctor.attributes?.categories?.data?.attributes?.Name}
            </div>
            <h2 className='text-center font-bold text-xl'>{doctor.attributes?.Name}</h2>
            <h2 className='ml font-bold text-sm'>{doctor.attributes?.Year_of_Experience} years</h2>
            <h2 className='ml font-bold text-sm'>{doctor.attributes?.Address}</h2>
            <Link href={'/details/' + doctor.id} className='w-full'>
            <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full text-center cursor-pointer hover:bg-primary hover:text-white text-[14px] mt-2 hover:font-bold transition-shadow ease-in-out'>Book Now</h2>
            </Link>
          </div>
        )) :
        // Skelton Effect
        [1,2,3,4,5,6].map((item, index)=>(
          
          <div className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'>

          </div>
        ))
          }
      </div>
    </div>
  )
}

export default DoctorList