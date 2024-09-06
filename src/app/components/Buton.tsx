import React from 'react'
import Link from 'next/link'
export  function DynamicButton({text}:{text:string}) {
  return (
    <Link href='/Form'  className='joinButton'>{text}</Link>
  )
}
export function WorkoutButton() {
  return (
    <Link href='/Form' className='workoutNowButton '>Workout Now</Link>
  )
}