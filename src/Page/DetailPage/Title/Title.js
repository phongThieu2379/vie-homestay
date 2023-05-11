import React, { useEffect } from 'react'
import { detailService } from '../../../service/detailService'

export default function Title({ ten,viTri }) {

  useEffect(() => { 
    detailService
    .getLocation()
    .then((res) => {
            console.log(res);
          })
          .catch((err) => {
           console.log(err);
          });
   },[])
  return (
    <div className='my-4'>
      <h1 className='font-bold text-xl sm:text-3xl tracking-widest leading-relaxed text-gray-900'>{ten}</h1>
      <div className='flex justify-between items-center'>
        <div className='' >
        <span  className='text-sm font-normal tracking-widest'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block text-sm font-normal ">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          4</span>
          <span> 62 đánh giá</span>
          <span>Chủ nhà siêu cấp</span>
          <span>vị trí</span>
        </div>
        <div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" /><path d="M16 3v23V3z" /><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" /></g>
          </svg>
          <span>Chia Sẽ</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <span>Lưu</span>

        </div>
      </div>
    </div>
  )
}
