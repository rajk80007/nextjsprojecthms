"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";
import DoctorList from "./_components/DoctorList";

export default function Home() {

  const [doctorList, setDoctorList]=useState([]);

  useEffect(()=>{
    getDoctorList();
  }, [])
  const getDoctorList=()=>{
    GlobalApi.getDoctorList().then(resp=>{
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className="mx-5">
      {/* Hero Section */}
      <Hero />
      {/*  Search bar + Categories */}
      <CategorySearch />

      {/* Popular Doctor List */}
      <DoctorList doctorList={doctorList}/>
    </div>
  );
}
