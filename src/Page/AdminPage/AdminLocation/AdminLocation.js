import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { headerLocation } from "./UltiAdminLocation";
import { roomService } from "../../../service/bookingService";

export default function AdminLocation() {
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
      console.log(error);
    }
  };
  let handleDeleteLocation = async (id) => {
    try {
      let res = await roomService.deleteLocation(id);
      console.log(res);
    } catch (error) {
      console.log(error);
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
