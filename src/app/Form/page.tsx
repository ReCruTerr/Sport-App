'use client'
import React from 'react'
import Link from 'next/link'
import {useForm,SubmitHandler} from 'react-hook-form'
export default function Form() {
  const {register,handleSubmit,watch,formState:{errors},} = useForm<I_Fields>()

  type I_Fields = {
    name:string,
    number:number,
    email: string
  } 
  const  onSubmit:SubmitHandler<I_Fields> = async (data) => {
    console.log(data);
    const res = await fetch('/api/contact',{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            "Content-Type":"application/json",
        }
    }).then((response)=>  response.json())
    .then((data) => console.log(data)
    )
    .catch((err) => console.log(err)
    )
    }

  return (
    <main className='bg-[rgb(29,22,47)] w-screen h-screen  overflow-hidden'>
      <div className='w-full h-full flex justify-center items-center flex-col '> 
      <h1 className='capitalize font-bold text-white text-5xl mb-20'>fill the fields and we'll contact with you </h1>
          <form className=' flex flex-col items-center gap-5 max-w-[300px] w-full ' onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <span className='text-xs text-red-600 relative text-left w-full'> This field is required!</span>} 
          <input {...register('name',{required:true})} type="text" id='Field' className=' text-xs border-[1px] bg-[rgba(0,0,0,0)] text-white w-full min-h-[37px] transition-opacity duration-[0.8s] rounded-3xl placeholder:text-xs placeholder:pl-3 pl-3 outline-none' placeholder='Your Name' />
          {errors.number && <span className='text-xs text-red-600 relative text-left w-full'> This field is required!</span>}
          <input {...register('number', {required:true})} type="tel" pattern='\+[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{2}[0-9]{2}' id='Field' className=' text-xs border-[1px] bg-[rgba(0,0,0,0)] text-white w-full min-h-[37px] transition-opacity duration-[0.8s] rounded-3xl placeholder:text-xs placeholder:pl-3 pl-3 outline-none' placeholder='Your Number' />
          {errors.email && <span  className='text-xs text-red-600 relative text-left w-full'>Fill the field correctly!</span>}
          <input {...register('email', {required:true, validate:(val:string) => {
            if (val.includes('@')) return true
            return false
          }
          })} type="email" id='Field' className=' text-xs border-[1px] bg-[rgba(0,0,0,0)] text-white w-full min-h-[37px] transition-opacity duration-[0.8s] rounded-3xl placeholder:text-xs placeholder:pl-3 pl-3 outline-none' placeholder='Email Adress' />
          <button className='joinButton' type='submit'>Send Data!</button>
          </form>

      </div>
    </main>
  )
}
