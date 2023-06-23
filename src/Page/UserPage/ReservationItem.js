import React, { useEffect, useState } from "react";
import { roomService } from "../../service/bookingService";
import RoomItemByLocation from "../Location/RoomItemByLocation";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { setLoadingOffAction, setLoadingOnAction } from "../../redux-toolkit/spinnerSlice";

export default function ReservationItem({ reservedRooms ,fetchDataRoom,user}) {
  const [detailRooms, setDetailRooms] = useState([]);
  const fetchData = async (id) => {
    try {
      let res = await roomService.getRoomDetailByRoomId(id);
      setDetailRooms(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  let dispatch = useDispatch()
  const handleCanleResev = async (id) => {
    dispatch(setLoadingOnAction())
    try {
      let res = await roomService.deleteRoomReservation(id);
      fetchDataRoom(user.id)
      message.success("Xóa đặt phòng thành công");
      dispatch(setLoadingOffAction())
    } catch (error) {
      message.error("Xóa đặt phòng thất bại");
      console.log(error);
      dispatch(setLoadingOffAction())
    }
  };
  const convertDate = (stringDate) => {
    let d = stringDate.split(",")[0];
    return d;
  };
  useEffect(() => {
    fetchData(reservedRooms.maPhong);
  }, [reservedRooms.maPhong]);
  return (
    <div className="my-2 border-b border-solid border-b-gray-400 border-x-0 border-t-0">
      <div className="flex flex-row justify-between">
        <h3>Thời gian đặt phòng</h3>
        <Button danger onClick={() => handleCanleResev(reservedRooms.id)}>
          Hủy đặt
        </Button>
      </div>
      <p>
        Ngày đến :{" "}
        {convertDate(new Date(reservedRooms.ngayDen).toLocaleString())}{" "}
      </p>
      <p>
        Ngày đi : {convertDate(new Date(reservedRooms.ngayDi).toLocaleString())}{" "}
      </p>

      <RoomItemByLocation room={detailRooms} />
    </div>
  );
}
