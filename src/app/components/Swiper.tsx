import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { programsData } from '../data'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Slider() {
  return (
    <Swiper className='max-w-[1200px] w-full flex justify-center flex-col items-center gap-8' id='swiperCont' 
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    pagination={{clickable:true}}
    > 
    { 
        programsData.map((el,index) => { 
            return ( 
                <SwiperSlide className=' max-w-[350px] w-full min-h-[433px] flex flex-col gap-3 px-3' > 
                    <Image src={el.img} width={350} height={240} alt='pic' className=' rounded-lg'></Image> 
                    <p className='font-bold text-3xl ' id='trainingCard__mainText'>{el.title}</p> 
                    <i className='text-[14px]'  >{el.trainer}</i> <br />
                    <span className='text-[13px] text-[#4B4B4B]'>{el.description}</span> 
                    <Link href='' className='flex gap-4 transition-all ease-in duration-200 hover:gap-8'> 
                        <span className='text-[#3043A9]'>{el.link}</span> 
                       <Image src={el.arrow} width={25} height={25} alt='pic' className='cursor-pointer'></Image> 
                    </Link> 
                </SwiperSlide> 
            ) 
        }) 
    } 
</Swiper>
  )
}
