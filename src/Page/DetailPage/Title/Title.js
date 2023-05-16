import React, { useEffect, useState } from 'react'
import { detailService } from '../../../service/detailService'
import { useDispatch, useSelector } from 'react-redux';
import { setLocalAction } from '../../../redux-toolkit/localSlice';

export default function Title({ ten, id }) {

  const [local, setlocal] = useState([])
  let dispatch = useDispatch();
  useEffect(() => {
    console.log(" title")
    detailService
      .getLocation(id)
      .then((res) => {
        setlocal(res.data.content)
        dispatch(setLocalAction(res.data.content))
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id])

  return (
    <div className='my-4'>
      <h1 className='font-bold text-xl sm:text-3xl tracking-widest leading-relaxed text-gray-900'>{ten}</h1>
      <div className='flex justify-between items-center'>
        <div className=' flex justify-around items-center text-xs lg:text-sm' >
          <span className='text-xs font-normal tracking-widest '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block text-sm font-normal ">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>

          </span>
          <span className='ml-1 mr-2 '>4</span>
          <span className='mr-2'>
            <span className='font-bold ml'>62 </span>
            đánh giá</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>


          <span className='ml-1 mr-2'>Chủ nhà siêu cấp</span>
          <span className=''>{local.tenViTri},</span>
          <span className='mx-1'>{local.tinhThanh},</span>
          <span className=''>{local.quocGia}</span>


        </div>
        <div className="flex flex-wrap justify-center items-center">
          <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150 flex justify-center items-center font-semibold text-sm text-gray-700">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}>
              <g fill="none">
                <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
                <path d="M16 3v23V3z" /><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
              </g>
            </svg>
            <span className="ml-2">
              Chia sẻ
            </span>
          </button>
          <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150  flex justify-center items-center font-semibold text-sm text-gray-700">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
            <span className="ml-2">
              Lưu
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}
