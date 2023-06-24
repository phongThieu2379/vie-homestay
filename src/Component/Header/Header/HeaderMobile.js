import React, { useState } from "react";
import { logoAirbnb, logoLanguage } from "../../logoSgv";
import SearchBar from "../SearchBar/SearchBar";
import UserInfor from "../UserInfor/UserInfor";
import { NavLink } from "react-router-dom";
export default function HeaderMobile() {
  const [isSticky, setIsSticky] = useState(false)
  window.onscroll = () => {
    addSticky()
  }
  let addSticky = () => {
    if (window.pageYOffset > 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  return (
    <div className={isSticky ? "shadow top-0 fixed px-4 w-full z-40 bg-white" : "px-4 shadow"}>
      <div
        style={{ height: 80 }}
        className=" container mx-auto flex justify-between items-center"
      >
        <NavLink to="/homepage">
          <div id="logo" className="flex flex-row items-center space-x-2 ">
            <span style={{ color: "#fd395b" }}>{logoAirbnb}</span>

          </div>
        </NavLink>

        <SearchBar />

        <div className="flex items-center z-50 ">
          <UserInfor />
        </div>
      </div>
    </div>
  );
}
