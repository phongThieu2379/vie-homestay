import React from "react";
import { logoAirbnb, logoLanguage } from "../logoSgv";
import SearchBar from "./SearchBar";
import UserInfor from "./UserInfor";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="shadow ">
      <div
        style={{ height: 80 }}
        className=" container mx-auto flex justify-between items-center"
      >
        <NavLink to="/homepage">
          <div id="logo" className="flex flex-row ">
            {logoAirbnb}
            <h1>airbnb</h1>
          </div>
        </NavLink>
        <SearchBar />
        <div className="flex items-center ">
          <h3>Cho thuê chổ ở qua AirBnb</h3>
          <div className="mx-4 flex items-center">{logoLanguage}</div>
          <UserInfor />
        </div>
      </div>
    </div>
  );
}
