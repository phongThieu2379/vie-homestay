import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, differenceInBusinessDays } from "date-fns";
import "./Booking.css";
import { useSelector } from "react-redux";

export default function Booking() {
  let { giaTien } = useSelector((state) => state.detailSlice.listRoom);
  const [openDate, setOpenDate] = useState(false);
  const [daysBook, setDaysBook] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleCalculateDays = (date) => {
    setDate([date.selection]);
    let dayCount =
      (date.selection.endDate.getTime() - date.selection.startDate.getTime()) /
      (1000 * 3600 * 24);
    setDaysBook(dayCount);
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-2/5">
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
                <div
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className="border-r border-solid border-gray-400 rounded-tl-md w-full p-2 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-xs uppercase font-semibold">
                    Nhận phòng
                  </div>
                  <div className="m-1">{`${format(
                    date[0].startDate,
                    "dd/MM/yyyy"
                  )}`}</div>
                </div>
                <div
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className=" rounded-tr-md w-full p-2 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-xs uppercase font-semibold">
                    Trả phòng
                  </div>
                  <div className="m-1">{`${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}</div>
                </div>
                <div className="booking__date border-solid absolute">
                  {openDate && (
                    <DateRangePicker
                      onChange={(item) => handleCalculateDays(item)}
                      ranges={date}
                      months={1}
                      direction="horizontal"
                      moveRangeOnFirstSelection={false}
                      showSelectionPreview={true}
                      preventSnapRefocus={true}
                      calendarFocus="backwards"
                    />
                  )}
                </div>
              </div>
              
            </div>
            <button
              type="submit"
              className="w-full py-3  mt-3 rounded-lg text-white text-lg font-semibold"
              style={{
                background:
                  "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
              }}
            >
              Đặt phòng
            </button>
            <div className="text-center font-normal text-gray-400 my-2">
              <span>Bạn vẫn chưa bị trừ tiền</span>
            </div>
            <div className="border-b py-2">
              <div className="flex justify-between py-1 text-base">
                <div className="underline text-gray-600">
                  {giaTien} $ x {daysBook} đêm
                </div>
                <div>
                  <span>{giaTien * daysBook}</span>$
                </div>
              </div>
              <div className="flex justify-between py-1 text-base">
                <div className="underline text-gray-600">Phí dịch vụ</div>
                <div>
                  <span>0</span>$
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold pt-3">
              <div>Tổng trước thuế</div>
              <div>{giaTien * daysBook} $</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// console.log("🚀 ~ file: Booking.js:116 ~ Booking ~ date[0].startDate:", date[0].startDate)
