import React, { useEffect, useState } from "react";
import { roomService } from "../../service/bookingService";
import ReservationItem from "./ReservationItem";

export default function ReservationRoom({ user }) {
  let [reservedRooms, setReservedRooms] = useState([]);
  const fetchData = async (id) => {
    try {
      let res = await roomService.getReservationByUser(id);
      setReservedRooms(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(user.id);
  }, []);
  const renderRoomList = () => {
    return reservedRooms.map((item) => {
      return (
        <ReservationItem
          key={item.id}
          reservedRooms={item}
          fetchDataRoom={fetchData}
          user={user}
        />
      );
    });
  };
  return <div>{renderRoomList()}</div>;
}
