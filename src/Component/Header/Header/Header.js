import React from "react";
import { Desktop, Mobile, Tablet } from "../../../Layout/Reponsive";
import HeaderTablet from "./HeaderTablet";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <div>
      <Tablet>
        <HeaderTablet />
      </Tablet>
      <Desktop>
        <HeaderDesktop />
      </Desktop>
      <Mobile>
        <HeaderMobile />
      </Mobile>
    </div>
  );
}
