import React from 'react'
import Image from 'next/image'
import { benefitsData, exactBenefits } from '@/app/data'
export default function Benefits() {
  return (
    <div className='bg-white w-screen min-h-[772px] flex flex-col justify-center items-center gap-5 px-5 py-7 relative z-50 mt-[340px]'>
        <header className='max-w-[580px] w-full flex justify-between items-center '>
        <Image src='/firstCav.svg' width={71} height={60} alt='pic' className='relative bottom-10'></Image>
        <div className='text-center'>
            <span className='capitalize'>about us</span>
            <h2 className=' text-4xl font-bold'>Benefits of joining <br /> with us</h2>
        </div>
        <Image src='/secondCav.svg' width={71} height={60} alt='pic' className='relative bottom-10'></Image>
        </header>

        <main className='max-w-[840px] w-full flex justify-center items-center gap-4 mt-8'>
            {
                benefitsData.map((el,index) => (
                    <div className='flex flex-col max-w-[255px] w-full gap-2 border-r-2 border-solid justify-center items-center'>
                        <h2 className='font-bold text-[48px] capitalize'>{el.title}</h2>
                        <span>{el.span}</span>
                    </div>
                ))
            }
            <div className='flex flex-col max-w-[255px] w-full gap-2 justify-center items-center'>
                        <h2 className='font-bold text-[48px]'>400+</h2>
                        <span className=' capitalize'>dedicated members</span>
            </div>
        </main>
        
        <footer className=' mt-9 max-w-[1200px] w-full min-h-[245px] flex flex-wrap justify-center items-center gap-7'>
            {
                exactBenefits.map((el,index) => (
                    <main key={index} className=' max-w-[540px] w-full min-h-[107px] flex  justify-center items-center gap-10' >
                        <Image src={el.img} height={70} width={70} alt='pic'></Image>
                        <div className=' flex flex-col gap-1'>
                            <h1 className=' capitalize text-2xl font-bold'>{el.title}</h1>
                            <span className=' capitalize text-[14px] opacity-80 '>{el.span}</span>
                        </div>
                    </main>
                ))
            }
        </footer>
    </div>
  )
}
