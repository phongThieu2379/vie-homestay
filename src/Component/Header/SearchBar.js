import Search from "antd/es/transfer/search";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { roomService } from "../../service/bookingService";
import { AutoComplete } from "antd";

export default function SearchBar() {
  let [searchValue, setSearchValue] = useSearchParams();
  let [locationList, setLocationList] = useState([]);
  useEffect(() => {
    roomService
      .getLocationList()
      .then((res) => {
        setLocationList(res.data.content);
        let cloneLocationList = res.data.content;
        cloneLocationList = cloneLocationList.map((location) => {
          return {
            ...location,
            label: `${location.tenViTri}`,
            value: `${location.id}`,
          };
        });
        setLocationList(cloneLocationList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let navigate = useNavigate();
  let handleSelectLocation = (locationId) => {
    navigate(`/location/${locationId}`);
    window.location.reload();
    console.log(locationId);
  };
  return (
    <div className="">
      <div className="relative">
        <h1>Vị Trí</h1>

        <AutoComplete
          style={{
            width: 400,
          }}
          key={locationList}
          options={locationList}
          placeholder="Nhập vị trí bạn muốn tìm"
          className="placeholder:text-black focus: border-black focus:border-2 z-10"
          filterOption={true}
          onSelect={(id) => handleSelectLocation(id)}
          optionFilterProp={"label"}
        />
      </div>
    </div>
  );
}
