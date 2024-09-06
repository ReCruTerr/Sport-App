import { dataOfCard } from '@/app/data'
import React, { ReactElement } from 'react'
import Image from 'next/image'
import {DynamicButton,WorkoutButton} from '../Buton'
export default function Cards() {
  return (
    <main className=' max-w-[1100px] w-full min-h-[682px] flex justify-center  items-center gap-3 '>
      <div className='flex flex-col items-center gap-4 max-w-[650px] w-full min-h-[682px] bg-white  rounded-[30px] z-20 shadow-2xl'>
        <h3 className='font-bold text-4xl text-white '>Basic</h3>
        <Image src='/whiteGym.svg' width={188} height={120} alt='pic'></Image>
        <span className=''>The Rock</span>
        <ul className='flex flex-col gap-2 list-none '>
          <div className='flex gap-1' >
            <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>3 Times A Week</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Full Zoom</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>PDF Module</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Meal Preparation</li>
          </div>
        </ul>

      <div className=' mt-[40%] flex flex-col items-center ' >
      <strong id='priceTraining' className=' text-[32px] w-full'>Rp500.000 <span className=' font-thin'>/ month</span></strong>
      <WorkoutButton/>
      </div>
      </div>
      <div className='flex flex-col items-center gap-4 max-w-[350px] w-full min-h-[682px] bg-white  rounded-[30px] z-20 shadow-2xl '>
        <h3 className='font-bold text-4xl text-white '>Basic</h3>
        <Image src='/femaleGym.svg' width={188} height={120} alt='pic'></Image>
        <span className=''>Anna Jane</span>
        <ul className='flex flex-col gap-2 list-none '>
          <div className='flex gap-1' >
            <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>3 Times A Week</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Full Zoom</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>PDF Module</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Meal Preparation</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Suplement</li>
          </div>
        </ul>

      <div className=' mt-[30%] flex flex-col items-center'>
      <strong className=' text-[32px] ' id='priceTraining'>Rp500.000 <span className=' font-thin'>/ month</span></strong>
      <WorkoutButton/>     
      </div>
      </div>
      <div className='flex flex-col items-center gap-4 max-w-[350px] w-full min-h-[682px] bg-white  rounded-[30px] z-20 shadow-2xl'>
        <h3 className='font-bold text-4xl text-white '>Basic</h3>
        <Image src='/friks.svg' width={188} height={120} alt='pic'></Image>
        <span className=''>The Rock</span>
        <ul className='flex flex-col gap-2 list-none '>
          <div className='flex gap-1' >
            <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>3 Times A Week</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Full Zoom</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>PDF Module</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Meal Preparation</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Suplement</li>
          </div>
          <div className='flex gap-1'>
          <Image src='/pluss.svg' width={22} height={22} alt='pic'></Image>
            <li>Gym Equipment</li>
          </div>
        </ul>

      <div className=' mt-[20%] flex flex-col items-center'>
      <strong className=' text-[32px] ' id='priceTraining'>Rp500.000 <span className=' font-thin'>/ month</span></strong>
      <WorkoutButton/>      
      </div>
      </div>
    </main>
  )
}
