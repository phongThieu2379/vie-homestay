
import React, {  useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { roomService } from "../../../service/bookingService";
import { AutoComplete } from "antd";

export default function SearchBarMobile() {
  let [searchValue, setSearchValue] = useState("");
  let [searchId, setSearchId] = useState("");
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

  // run function when state of searchValue and searchId change due to selection from autocomplete antd

  useEffect(() => {
    let index = locationList.findIndex((location) => location.id == searchId);
    if (index != -1) {
      navigate(`/location/${searchId}`);
      setSearchValue(locationList[index].tenViTri);
    }
  }, [searchId]);

  // search the location base on the ID of the room
  let handleSelectLocation = (locationId) => {
    let index = locationList.findIndex((location) => location.id == locationId);
    if (index != -1) {
      navigate(`/location/${locationId}`);
    } else {
      navigate(`/notfound`);
    }
  };

  // set state after autocomplete selection
  let handleSetState = (locationId, label) => {
    setSearchId(locationId);
    setSearchValue(label);
  };

  // search the value when press enter
  let handleSearch = () => {
    let index = locationList.findIndex(
      (location) => location.tenViTri == searchValue
    );
    if (index != -1) {
      let locationId = locationList[index].id;
      handleSelectLocation(locationId);
    } else {
      navigate(`/notfound`);
      console.log("useeffect3");
    }
  };
  const handleKeypress = (e) => {
    const dropdownActive =
      e.target.parentNode.querySelector(
        ".ant-select-dropdown:not(.ant-select-dropdown-hidden)"
      ) !== null;
    if (e.keyCode === 13) {
      if (!dropdownActive) {

        handleSearch();
      } else {
        e.preventDefault();
        e.target.parentNode
          .querySelector(".ant-select-dropdown-menu-item-active")
          .click();
      }
    }
  };
  // search the value when press enter

  return (
    <div className="">
      <div className="relative flex items-center justify-center space-x-2">
        <AutoComplete
          style={{
            width: 200,
            borderRadius:"50px",
            overflow:"hidden",
            border: "1px solid gray"
            
          }}
          value={searchValue}
          onChange={(value) => {
            setSearchValue(value);
          }}
          notFoundContent="No location found..."
          key={locationList}
          options={locationList}
          placeholder="Nhập vị trí bạn muốn tìm"
          className="placeholder:text-black focus: border-black focus:border-2 z-10"
          filterOption={true}
          onSelect={(id, option) => {
            handleSetState(id, option.label);
          }}
          optionFilterProp={"label"}
          onKeyDown={handleKeypress}
          popupClassName=""
        />
       
      </div>
    </div>
  );
}
