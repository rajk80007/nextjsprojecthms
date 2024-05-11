"use client"

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

const Details = ({ params }) => {

  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then(resp => {
      // console.log(resp.data.data.attributes.image.data[0].attributes.url);
      setDoctor(resp.data.data);
    })
  }

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        {/* Doctor Detail */}
        <div className='col-span-3 '>
          {/* Doctor Image */}
          {doctor&&<DoctorDetails doctor={doctor} />}
         </div>

        {/* Doctor Suggestion */}
        <div>
        {doctor&&<DoctorSuggestionList doctor={doctor}/>}
        </div>

      </div>
    </div>
  )
}

export default Details