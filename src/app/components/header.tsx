import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { linkOfHeadr } from '../data'
import {DynamicButton} from './Buton'
import ContactButton from './ContactButton'
export const Haeder = () => {
  return (
    <div className=' w-screen  min-h-screen bg-[#161D2F]'>
    <nav className=' flex justify-around items-center min-h-20 '>
    <Link href='/'>
    <Image
    src='/StayHealthy.svg'
    width={156}
    height={36}
    alt='Logo'
    ></Image>
    </Link>
        <div  className=' max-w-[800px] w-full flex justify-center items-center gap-40 text-white text-[15px] '>
            <div className=' max-w-96 w-full flex justify-center items-center gap-8 mx-4' id='navigation'>
            <Link href='/' className=' transition-all ease-in-out duration-200 hover:opacity-80'>Home</Link>
            {
                linkOfHeadr.map((el,index) => (
                    <Link href='' className=' transition-all ease-in-out duration-200 hover:opacity-80' key={index}>{el}</Link>
                ))  
            }

            </div>
             <DynamicButton text='Join Now'/>
            </div>
    </nav>
    <main className='w-full flex flex-col justify-center items-center my-10 '>
      <span className='text-white text-xs '>WELCOME TO THE CLUB</span>
      <h1 className=' text-[60px] text-white font-bold max-w-[1000px] w-full text-center'>Choose Your Programs, <br /> Pick Your Meal, <br /> Let’s Get Healthy.</h1>
      <span className='text-white max-w-[1000px] text-center my-5  capitalize'>StayHealty provides Online Training, and Consultation About Diet and Exercise tailored based <br /> on user needs. We will provide a training model that can be accessed anytime and <br /> anywhere with the best trainers.</span>
      <div className='max-w-[480px] w-full flex justify-center items-center gap-5 h-[53px]'>
        <DynamicButton text='Join Now'/>
        <ContactButton/>
      </div>
      <Link href='https://www.youtube.com/'><Image className=' my-8 mb-5 hover:opacity-85 cursor-pointer'
      src='/sport.svg'
      width={1100}
      height={600}
      alt='Sport Pic'
      ></Image></Link>
    </main>
    </div>
  )
}
