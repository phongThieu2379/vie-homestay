import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, format,differenceInBusinessDays } from 'date-fns'
import "./Booking.css"
import { useSelector } from 'react-redux';

export default function Booking() {
  let {giaTien}= useSelector(state=> state.detailSlice.listRoom)
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const soDem = differenceInBusinessDays(
    date[0].endDate,
    date[0].startDate,
  )

  

  return (
    <div className='w-full sm:w-1/2 lg:w-2/5'>


      <div className="booking sticky top-28">
        <div className="bg-white shadow-xl border rounded-xl p-6 w-full lg:w-5/6 mx-auto">
          <div className="relative w-full">
            <div className="hidden md:flex justify-between items-center mb-4">
              <div>
                <span>$ </span>
                <span className="text-xl font-semibold">{giaTien} $</span>
                <span className="text-base"> đêm</span>
              </div>

            </div>
            <div className="flex flex-col border border-solid border-gray-400 rounded-md">
              <div className="flex w-full border-b border-solid border-gray-400 relative">
                <div onClick={() => { setOpenDate(!openDate) }} className="border-r border-solid border-gray-400 rounded-tl-md w-full p-2 cursor-pointer hover:bg-gray-100">
                  <div className="text-xs uppercase font-semibold">Nhận phòng</div>
                  <div className="m-1">{`${format(date[0].startDate, "dd/MM/yyyy")}`}</div>
                </div>
                <div onClick={() => { setOpenDate(!openDate) }} className=" rounded-tr-md w-full p-2 cursor-pointer hover:bg-gray-100">
                  <div className="text-xs uppercase font-semibold">Trả phòng</div>
                  <div className="m-1">{`${format(date[0].endDate, "dd/MM/yyyy")}`}</div>
                </div>
                <div className="booking__date border-solid absolute">
                {openDate && <DateRangePicker
                  
                  onChange={item => setDate([item.selection])}
                  ranges={date}
                  months={1}
                  direction="horizontal"
                  moveRangeOnFirstSelection={false}
                  showSelectionPreview={true}
                  preventSnapRefocus={true}
                  calendarFocus="backwards"
                />}
                </div>
              </div>
              <div className="p-2">
                <div className="uppercase text-xs font-semibold">Khách</div>
                <div className="flex justify-between items-center m-1">
                  <button className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer" disabled>-</button>
                  <div>0 khách</div>
                  <button className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer">+</button>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full py-3  mt-3 rounded-lg text-white text-lg font-semibold" style={{ background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)' }}>
              Đặt phòng
            </button>
            <div className="text-center font-normal text-gray-400 my-2">
              <span>Bạn vẫn chưa bị trừ tiền</span>
            </div>
            <div className="border-b py-2">
              <div className="flex justify-between py-1 text-base">
                <div className="underline text-gray-600">
                  {giaTien} $ x {soDem} đêm
                </div>
                <div>
                  <span>0</span>
                  $
                </div>
              </div>
              <div className="flex justify-between py-1 text-base">
                <div className="underline text-gray-600">
                  Phí dịch vụ
                </div>
                <div>
                  <span>0</span>
                  $
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold pt-3">
              <div>
                Tổng trước thuế
              </div>
              <div>{giaTien*soDem} $</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
