import React, { useEffect, useState } from "react";
import { roomService } from "../../service/bookingService";
import RoomItem from "./RoomItem";

export default function RoomList() {
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    roomService
      .getRoomList()
      .then((res) => {
        setRoomList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(roomList)
  const renderRoomList = () => {
    return roomList.map((room) => {
      return <RoomItem id={room.id} room={room} />;
    });
  };
  return <div className=" pb-10 container mx-auto flex flex-wrap justify-center ">{renderRoomList()}</div>;
}
