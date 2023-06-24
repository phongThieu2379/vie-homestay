import React, { useEffect, useState } from "react";
import { roomService } from "../../service/bookingService";

import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux-toolkit/spinnerSlice";
import RoomItem from "./RoomItem/RoomItem";

export default function RoomList() {
  const [roomList, setRoomList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingOnAction());
    roomService
      .getRoomList()
      .then((res) => {
        dispatch(setLoadingOffAction());
        setRoomList(res.data.content);
      })
      .catch((err) => {
        dispatch(setLoadingOffAction());
        console.log(err);
      });
  }, []);
  const renderRoomList = () => {
    return roomList.map((room) => {
      return <RoomItem id={room.id} room={room} />;
    });
  };
  return (
    <div className=" pb-10 container mx-auto flex flex-wrap justify-center ">
      {renderRoomList()}
    </div>
  );
}
