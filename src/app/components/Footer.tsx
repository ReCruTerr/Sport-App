import React from 'react'
import { footerNav, socialMedia } from '../data'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <>

    <footer className='w-screen min-h-[287px] flex justify-center items-center'>
        <div className='flex flex-col gap-3 max-w-[445px] w-full'>
            <h1 className='font-bold text-4xl'>StayHealthy</h1>
            <span className=' capitalize text-[15px] opacity-85'>Online Training, and Consultation About Diet and Exercise tailored based on user needs. </span>
            <div className=' max-w-[140px] w-full flex gap-3'>
                {
                    socialMedia.map((el,index) => (
                        <Link href={el.src}><Image src={el.img} height={40} width={40} alt='pic'></Image></Link>
                    ))
                }
            </div>
        </div>
        <div className=' max-w-[653px] w-full min-h-[129px] flex justify-center items-center gap-14'>
            {
                footerNav.map((el,index) => (
                    <div className='flex flex-col gap-5' key={index}>
                        <h2 className='font-bold text-2xl'>{el.title}</h2>
                        <span className='opacity-80 text-xs'>{el.span1}</span>
                        <span className='opacity-80 text-xs'>{el.span2}</span>
                        <span className='opacity-80 text-xs'>{el.span3}</span>
                    </div>
                ))
            }
            
        </div>
    </footer>
    <span className='w-screen flex justify-center text-[14px] opacity-80'>© 2021 StayHealty. All rights reserved</span>
    </>
  )
}
