import React from 'react'

export default function ItemCmt({ item }) {
  return (
    <div className="mb-5">
      <div className="flex items-center">
        <div>
          <img src={item.avatar} className="w-10 h-10 rounded-full overflow-hidden shadow-lg" />
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-base tracking-wide text-gray-900">
           {item.tenNguoiBinhLuan}
          </h4>
          <span className="font-normal text-sm text-gray-500">
            {item.ngayBinhLuan}
          </span>
        </div>
      </div>
      <div className="text-gray-800 tracking-wider">
        <p>{item.noiDung}</p>
      </div>
    </div>

  )
}
