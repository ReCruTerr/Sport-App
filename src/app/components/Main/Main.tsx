'use client'
import { programsData } from '@/app/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SwiperCont from '../Swiper'
import Slider from '../Swiper'
import {DynamicButton} from '../Buton'
import Package from './Package'
import Benefits from './Benefits'
import EmailForm from './EmailForm'
export default function Main() {
  return (
    <div> 
        <div className='w-screen min-h-[815px] bg-white my-10 flex flex-col items-center overflow-hidden  '>
            <span className='text-[14px]'>PROGRAMMS</span>
            <h2 className='text-[40px] font-bold capitalize text-center'>We Have a programs to help <br /> your workouts</h2>
            <Slider/>
        </div>
    <main className='flex justify-center items-center max-w-screen gap-5'>
        <div className='max-w-[605px] min-h-[484px] text-center w-full px-3 py-5'>
            <button className=' relative top-[60px] z-10 flex justify-center items-center transition-all ease-in-out duration-200 hover:-translate-y-2 gap-2 max-w-52 w-full rounded-[10px]  min-h-[60px] bg-[#161D2F]'>
                <Image src='/title.svg' height={30} width={30} alt='title'></Image>
                <span className='text-white'>Discipline</span>
            </button>
            <Image src='/blackDrinkWater.svg' height={274} width={472} alt='title' className=' rounded-md relative -z-10 ml-11'></Image>
            <Image src='/blackCooking.svg' height={274} width={472} alt='title' className='z-[2] relative bottom-10'></Image>
            <button className=' relative bottom-[98px] left-[265px] z-10 flex justify-center items-center transition-all ease-in-out duration-200 hover:-translate-y-2 gap-2 max-w-52 w-full rounded-[10px]  min-h-[60px] bg-[#161D2F]'>
                <Image src='/day.svg' height={30} width={30} alt='title'></Image>
                <span className='text-white'>Eating Healthy</span>
            </button>
        </div>
        <div className='flex flex-col items-start gap-5 mx-3 my-5'>
            <span className='text-[14px] uppercase '>Nutritions</span>
            <h2 className='text-[40px] capitalize'>meal preparation for <br /> workout</h2>
            <span className='text-[15px]  capitalize'>Don’t worry we have the best nutritionist for your workout, <br /> firstly consult with our experts, we can make your meal <br /> preparation based on <span className='font-bold'>Total Daily Energy Expenditure.</span> </span>
            <DynamicButton text='Join Now'/>
        </div>
    </main>
        <Package/>
        <Benefits/>
        <EmailForm/>
    </div>
  )
}
