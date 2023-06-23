import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { headerLocation } from "./UltiAdminLocation";
import { roomService } from "../../../service/bookingService";
import { useDispatch } from "react-redux";
import { setLoadingOffAction, setLoadingOnAction } from "../../../redux-toolkit/spinnerSlice";

export default function AdminLocation() {
  const dispatch = useDispatch();
  const [locationList, setLocationList] = useState([]);
  const fetchLocationList = async () => {
    try {
      let res = await roomService.getLocationList();
      let cloneLocationList = res.data.content.map((item) => {
        return {
          ...item,
          action: (
            <button
              className="bg-red-500 px-2 py-2 rounded"
              onClick={() => handleDeleteLocation(item.id)}
            >
              Xóa
            </button>
          ),
        };
      });
      setLocationList(cloneLocationList);
    } catch (error) {
      console.log(error.response.data.content);
      message.error(error.response.data.content);
    }
  };
  let handleDeleteLocation = async (id) => {
    dispatch(setLoadingOnAction());
    try {
      let res = await roomService.deleteLocation(id);

      dispatch(setLoadingOffAction());
    } catch (error) {
      console.log(error.response.data.content);
      message.error(error.response.data.content);
      dispatch(setLoadingOffAction());
    }
  };
  useEffect(() => {
    fetchLocationList();
  }, []);
  return (
    <div>
      <Table dataSource={locationList} columns={headerLocation} />
    </div>
  );
}
