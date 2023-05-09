import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { roomService } from "../../service/bookingService";

export default function SearchBar() {
  let [searchValue, setSearchValue] = useSearchParams();
  let [locationList, setLocationList] = useState([]);
  let [isSearch, setIsSearch] = useState(false);
  
  let handleOnChangeSearch = (e) => {
    let { value } = e.target;
    setSearchValue(value);
    if (value == null || !value) {
      setLocationList([]);
      setIsSearch(false);
    } else {
      roomService
        .getLocationSeach(value)
        .then((res) => {
          setLocationList(res.data.content.data);
          setIsSearch(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  let navigate = useNavigate()
  let handleSelectLocation = (locationId) => {
    navigate(`/location/${locationId}`)
    window.location.reload()
  };
  let renderLocationSearchList = () => {
    console.log(locationList);
    if (locationList.length == 0) {
      console.log("0");
      return <div className="italic">Vị trí bạn tìm không có...</div>;
    } else {
      return locationList.map((location) => {
        console.log();
        return (
          <button className="hover:bg-slate-400 rounded text-left my-1 transition-all ease-in-out w-full flex"
            onClick={() => handleSelectLocation(location.id)}
            id={location.id}
          >
            {location.tenViTri}, {location.tinhThanh}
          </button>
        );
      });
    }
  };
  return (
    <div className="">
      <div className="relative">
        <h1>Vị Trí</h1>
        <Search
          placeholder="Nhập vị trí bạn muốn tìm"
          className="placeholder:text-black focus: border-black focus:border-2"
          allowClear
          onChange={handleOnChangeSearch}
          style={{
            width: 400,
          }}
        />
        <div
          className={
            isSearch
              ? "block  p-2 absolute z-10 bg-white shadow rounded"
              : "hidden p-2 absolute z-10 bg-white shadow rounded"
          }
        >
          {renderLocationSearchList()}
        </div>
      </div>
    </div>
  );
}
