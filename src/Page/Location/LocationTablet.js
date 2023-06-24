import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomService } from "../../service/bookingService";

import RoomItemByLocation from "./RoomItemByLocation";
import { setLoadingOffAction, setLoadingOnAction } from "../../redux-toolkit/spinnerSlice";
import { useDispatch } from "react-redux";


export default function LocationTablet() {
  let { id } = useParams();
  const [roomList, setRoomList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingOnAction());
    roomService
      .getRoomListByLocationId(id)
      .then((res) => {
        
        setRoomList(res.data.content);
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
      });
  }, [id]);

  let renderRoomList = () => {
    return roomList.map((room) => {
      return <RoomItemByLocation key={room.id} id={room.id} room={room} />;
    });
  };
  return (
<div className="container mx-auto flex flex-col justify-center pb-10">
      <div className="map-site h-64">
        <iframe
        className="w-full p-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124928.46942706741!2d108.36814967832368!3d11.904066818194758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112fef20988b1%3A0xad5f228b672bf930!2zVHAuIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683624362060!5m2!1svi!2s"
          height={256}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="room-infor flex flex-col p-2">
        <h3>Chổ ở tại khu vực bạn đã chọn</h3>
        <div className="filter-option flex flex-row justify-between">
          <button className="bg-slate shadow px-3 rounded-full">Chổ ở</button>
          <button className="bg-slate shadow px-3 rounded-full">Giá</button>
          <button className="bg-slate shadow px-3 rounded-full">Đặt ngay</button>
          <button className="bg-slate shadow px-3 rounded-full">Phòng ngủ</button>
          <button className="bg-slate shadow px-3 rounded-full">Bộ lọc khác</button>
        </div>
        
        <div className="room-list py-3 flex flex-col justify-start">
          
          {renderRoomList()}
        </div>
      </div>
      
    </div>
  );
}
