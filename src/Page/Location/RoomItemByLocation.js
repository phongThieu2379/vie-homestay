import React from "react";

export default function RoomItemByLocation({ room }) {
  const { tenPhong, giaTien, moTa, hinhAnh } = room;
  const rendereIsBanLa = () => {
    if (room.banLa) {
      return <div class="mr-2">Bàn là</div>;
    }
  };
  const rendereIsBep = () => {
    if (room.bep) {
      return <div class="mr-2">Bếp</div>;
    }
  };
  const rendereIsDieuHoa = () => {
    if (room.dieuHoa) {
      return <div class="mr-2">Điều hòa </div>;
    }
  };
  const rendereIsDoXe = () => {
    if (room.doXe) {
      return <div class="mr-2">Đổ xe</div>;
    }
  };
  const rendereIsHoBoi = () => {
    if (room.hoBoi) {
      return <div class="mr-2">Hồ bơi</div>;
    }
  };
  const rendereIsMayGiat = () => {
    if (room.mayGiat) {
      return <div class="mr-2">Máy Giặt</div>;
    }
  };
  const rendereIsTv = () => {
    if (room.tivi) {
      return <div class="mr-2">Tivi</div>;
    }
  };
  const rendereIsWifi = () => {
    if (room.wifi) {
      return <div class="mr-2">Wifi</div>;
    }
  };
  return (
    <div className="room-location-item w-full ">
      <div class="flex flex-row items-start p-4 my-1 transition ease-in-out shadow w-full hover:shadow-slate-700 relative rounded  ">
        <div className="location-item-img flex-shrink-0">
          <img className="rounded" src={hinhAnh} />
        </div>
        <div className=" p-3 h-auto w-1/2">
          <div className="flex-wrap" >
            <div className=" border-b-2 border-black  ">
              <h2
                className="truncate"
              >
                {tenPhong}
              </h2>
              <button className="absolute right-4 top-8 flex place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
            <div className="py-2 grid grid-cols-3">
              {rendereIsBanLa()}
              {rendereIsBep()}
              {rendereIsDieuHoa()}
              {rendereIsDoXe()}
              {rendereIsHoBoi()}
              {rendereIsMayGiat()}
              {rendereIsTv()}
              {rendereIsWifi()}
            </div>
            <div className="absolute right-4 bottom-4">
              <span className="font-bold">${giaTien}</span>
              <span>/ tháng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
