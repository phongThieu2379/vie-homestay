import React from "react";

export default function RoomItemByLocation({ room }) {
  const { tenPhong, giaTien, moTa, hinhAnh,id } = room;
  const rendereIsBanLa = () => {
    if (room.banLa) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Bàn là
        </div>
      );
    }
  };
  const rendereIsBep = () => {
    if (room.bep) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Bếp
        </div>
      );
    }
  };
  const rendereIsDieuHoa = () => {
    if (room.dieuHoa) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Điều hòa{" "}
        </div>
      );
    }
  };
  const rendereIsDoXe = () => {
    if (room.doXe) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Đổ xe
        </div>
      );
    }
  };
  const rendereIsHoBoi = () => {
    if (room.hoBoi) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Hồ bơi
        </div>
      );
    }
  };
  const rendereIsMayGiat = () => {
    if (room.mayGiat) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Máy Giặt
        </div>
      );
    }
  };
  const rendereIsTv = () => {
    if (room.tivi) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Tivi
        </div>
      );
    }
  };
  const rendereIsWifi = () => {
    if (room.wifi) {
      return (
        <div class="mr-2 flex flex-row">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Wifi
        </div>
      );
    }
  };
  return (
    <div className="room-location-item ">
      <div class="py-2">
        <div class=" pr-4 relative hover:shadow-slate-700 flex flex-row items-start transition ease-in-out shadow rounded ">
          <div className="location-item-img flex-shrink-0 p-3">
            <img className="rounded" src={hinhAnh} />
          </div>
          <div className=" truncate p-3 h-auto grow pr-5">
            <div className=" border-b-2 border-black">
              <div className="truncate">{tenPhong}</div>
              <button className="absolute right-4 top-3 flex place-items-center">
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
