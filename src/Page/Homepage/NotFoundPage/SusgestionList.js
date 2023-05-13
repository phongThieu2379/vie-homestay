import React, { useEffect, useState } from "react";

import { Divider, List, Typography } from "antd";
import { roomService } from "../../../service/bookingService";

const SusgestionList = () => {
  let [locationList, setLocationList] = useState([]);
  useEffect(() => {
    roomService
      .getLocationList()
      .then((res) => {
        setLocationList(res.data.content);
        let cloneLocationList = res.data.content;
        cloneLocationList = cloneLocationList.map((location) => {
          return `${location.tenViTri}`;
        });
        setLocationList(cloneLocationList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <>
      
        <Divider orientation="left"></Divider>
        <List
          size="large"
          header={<div className="font-bold text-xl" >Susgestion location list</div>}

          bordered
          dataSource={locationList}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </>
    </div>
  );
};
export default SusgestionList;
