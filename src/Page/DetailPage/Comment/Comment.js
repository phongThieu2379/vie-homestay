import React, { useEffect, useState } from 'react'
import InputCmt from './InputCmt'
import { detailService } from '../../../service/detailService'
import ItemCmt from './ItemCmt'

export default function Comment({ id }) {
    const [cmt, setCmt] = useState([])


    useEffect(() => {
        console.log("cmt")
        detailService
            .getCmt(id)
            .then((res) => {
                // console.log(res);
                setCmt(res.data.content)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id])

    const renderComment = () => {
        return cmt.map((item) => {
            return <ItemCmt key={item.id} item={item} />
        })
    }

    return (
        <div className='mt-10 pb-5 border-b'>
            <div>
                <h2 className="font-semibold text-gray-800 text-xl pb-4 flex items-center">
                    <div className="flex items-center">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', height: 16, width: 16, fill: 'currentcolor' }}>
                            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <div className="ml-2">4 . </div>
                    <div className="ml-2">58 đánh giá</div>
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Mức độ sạch sẽ
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }} />
                        </div>
                        <div className="ml-4">
                            5,0
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Độ chính xác
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }} />
                        </div>
                        <div className="ml-4">
                            5,0
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Giao tiếp
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }} />
                        </div>
                        <div className="ml-4">
                            5,0
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Vị trí
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-gray-800 h-1 rounded-full" style={{ width: '95%' }} />
                        </div>
                        <div className="ml-4">
                            4,9
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Nhận phòng
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }} />
                        </div>
                        <div className="ml-4">
                            5,0
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-full text-base tracking-wide text-gray-700">
                        Giá trị
                    </div>
                    <div className="w-1/2 flex justify-between items-center">
                        <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }} />
                        </div>
                        <div className="ml-4">5,0</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-4 sm:w-4/5 mt-5'>
                {renderComment()}
                <div className="sm:col-span-2">
                    <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider">
                        Hiển thị tất cả 120 đánh giá
                    </button>
                </div>

            </div>

            <InputCmt />
        </div>
    )
}
