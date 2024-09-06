import React, { useState } from 'react'
import Image from 'next/image'
import {DynamicButton} from '../Buton'
export default function EmailForm() {
    const [active,setActive] = useState(false);
  return (
    <div  className='w-screen flex justify-center'>
        <main className='max-w-[1100px] w-full min-h-[400px] flex justify-around items-center gap-10 bg-[#161D2F] rounded-3xl'>
            <div className=' flex flex-col gap-2'>
                <h1 className=' capitalize text-white text-4xl'>Become a member of this <br /> workout class</h1>
                <div className=' flex justify-left items-center gap-6'>
                    <input type="text" id='emailField' className=' text-xs border-[1px] bg-[rgba(0,0,0,0)] text-white max-w-[215px] w-full min-h-[37px] transition-opacity duration-[0.8s] rounded-3xl placeholder:text-xs placeholder:pl-3 pl-3 outline-none' placeholder='Email Adress' />
                    <DynamicButton text='Join Now'/>
                </div>
            </div>
            <Image src='/multiPeople.svg' height={306} width={286} alt='pic'></Image>
        </main>
    </div>
  )
}
