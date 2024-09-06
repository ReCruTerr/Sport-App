import React from 'react'
import Cards from './Cards'

export default function Package() {
  return (
    <div className='w-screen bg-[#161D2F] h-[600px] flex flex-col items-center py-14 '>
        <span className='text-white text-[14px]'>PRICING</span>
        <h2 className='capitalize font-bold text-[40px]  text-center text-white '>CHOOSE YOUR PACKAGE <br /> FOR WORKOUT</h2>
        <main className='w-full flex justify-center '><Cards/></main>
        <div className='bg-white max-w-screen w-full min-h-[463px] relative bottom-80 z-10'></div>
    </div>
  )
}
