import React from 'react'
import Content from './Content/Content'
import Booking from './Booking/Booking'

export default function BodyDetail({detail}) {
  return (
    <div className='w-full flex sm:flex-row flex-col mt-10 border-b pb-5'>
        <Content detail={detail}/>
        <Booking/>
    </div>
  )
}
