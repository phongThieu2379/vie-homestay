import React from "react";
import { Desktop, Mobile, Tablet } from "../../../Layout/Reponsive";
import SearchBarTablet from "./SearchBarTablet";
import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";
export default function SearchBar() {
  return (
    <div>
      <Tablet>
        <SearchBarTablet />
      </Tablet>
      <Desktop>
        <SearchBarDesktop />
      </Desktop>
      <Mobile>
        <SearchBarMobile />
      </Mobile>
    </div>
  );
}
