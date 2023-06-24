import React from "react";
import { logoAirbnb, logoLanguage } from "../../logoSgv";
import SearchBar from "../SearchBar/SearchBar";
import UserInfor from "../UserInfor/UserInfor";
import { NavLink } from "react-router-dom";
export default function HeaderMobile() {
  return (
    <div className="shadow px-4">
      <div
        style={{ height: 80 }}
        className=" container mx-auto flex justify-between items-center"
      >
        <NavLink to="/homepage">
          <div id="logo"  className="flex flex-row items-center space-x-2 ">
            <span style={{color:"#fd395b"}}>{logoAirbnb}</span>
           
          </div>
        </NavLink>

        <SearchBar />

        <div className="flex items-center ">
         
          <UserInfor />
        </div>
      </div>
    </div>
  );
}
