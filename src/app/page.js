"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const page = ({params}) => {
  const city = params.city
  const router = useRouter()
  if(typeof window !== "undefined"){
    if(city){
      router.push("/"+city)
  
    }else{
      router.push("/mumbai")
  
    }
  }
 
  return (
    <div></div>
  )
}

export default page