import React, { useState } from "react";
import { logoAirbnb, logoLanguage } from "../../logoSgv";
import SearchBar from "../SearchBar/SearchBar";
import UserInfor from "../UserInfor/UserInfor";
import { NavLink } from "react-router-dom";

export default function HeaderTablet() {

  return (
    <div>
      <div className="shadow h-14 flex items-center justify-between ">
        <NavLink className="px-5" to="/homepage">
          <div id="logo" className="flex flex-row items-center space-x-2 ">
            <span style={{ color: "#fd395b" }}>{logoAirbnb}</span>
            <h1>airbnb</h1>
          </div>
        </NavLink>
        <SearchBar />
        <div className="px-4">
          <UserInfor  />
        </div>
        
      </div>
    </div>
  );
}
