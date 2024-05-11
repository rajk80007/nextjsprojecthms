import GlobalApi from '@/app/_utils/GlobalApi';
import  Link  from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const DoctorSuggestionList = ({doctor}) => {

    const [doctorList, setDoctorList] = useState([]);
    useEffect(()=>{
        getDoctorList();
    }, [])

    const getDoctorList=()=>{
        GlobalApi.getDoctorList().then(resp=>{
            console.log(resp.data.data);
            setDoctorList(resp.data.data);
        })
    }
  return (
    <div className='p-5 border-[1px] border-gray-200 rounded-lg mt-5'>
        <h2 className='text-2xl font-bold'>Suggestions</h2>
        {doctorList&&doctorList.map((item, index)=>(
        <Link href={'/details/' + item.id}>
            <div key={index} className='flex items-center gap-5 my-5 cursor-pointer hover:bg-gray-100 p-2 rounded-lg'>
                <Image src={item.attributes?.image?.data[0]?.attributes?.url} alt="Doctor Image" width={80} height={80} 
                className='rounded-full h-[80px] '/>
                <div className='flex flex-col items-baseline'>

                <h2 className='text-[10px] font-bold bg-blue-900 rounded-full px-2 py-1 text-secondary'>{item.attributes?.categories?.data?.attributes?.Name}</h2>
                <h2 className='font-bold'>{item.attributes?.Name}</h2>
                <h2 className='text-[12px] font-bold text-blue-600'>{item.attributes?.Year_of_Experience} Years</h2>
                </div>
            </div>
        </Link>
        ))}

    </div>
  )
}

export default DoctorSuggestionList