import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { detailService } from '../../service/detailService'

export default function RoomItem() {
  const [room, setRoom] = useState([])

  useEffect(() => { 
    detailService
    .getRoom()
    .then((res) => {
            console.log(res);
            setRoom(res.data.content)
          })
          .catch((err) => {
           console.log(err);
          });
   },[])
  return (
    <div className='my-6 grid grid-cols-4 gap-5'>
      {room.slice(0,2).map((item) => { 
        return <NavLink to={`/detail/${item.id}`}><img className='h-17 w-17 mx-3 object-cover object-center' key={item.id} src={item.hinhAnh} alt="" /></NavLink>
       })}
    </div>

  )
}
