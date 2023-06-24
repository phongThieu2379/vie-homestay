import React, { useState } from "react";
import { logoAirbnb, logoLanguage } from "../../logoSgv";
import SearchBar from "../SearchBar/SearchBar";
import UserInfor from "../UserInfor/UserInfor";
import { NavLink } from "react-router-dom";
export default function HeaderDesktop() {
  const [isSticky,setIsSticky]=useState(false)
  window.onscroll = ()=>{
    addSticky()
  }
  let addSticky = ()=>{
    if (window.pageYOffset > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  return (
    <div className={isSticky?"shadow top-0 fixed w-full z-50 bg-white":"shadow"}>
      <div
        style={{ height: 80 }}
        className=" container mx-auto flex justify-between items-center"
      >
        <NavLink to="/homepage">
          <div id="logo"  className="flex flex-row items-center space-x-2 ">
            <span style={{color:"#fd395b"}}>{logoAirbnb}</span>
            <h1>airbnb</h1>
          </div>
        </NavLink>

        <SearchBar />

        <div className="flex items-center ">
          <h3>AirBnb - place for renting</h3>
          <div className="mx-4 flex items-center">{logoLanguage}</div>
          <UserInfor />
        </div>
      </div>
    </div>
  );
}
