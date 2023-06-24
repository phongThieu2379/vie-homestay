import React from "react";
import { Desktop, Mobile, Tablet } from "../../../Layout/Reponsive";
import UserInforDesktop from "./UserInforDesktop";
import UserInforTablet from "./UserInforTablet";
import UserInforMobile from "./UserInforMobile";

export default function UserInfor() {
  return (
    <div>
      <Tablet>
        <UserInforTablet />
      </Tablet>
      <Desktop>
        <UserInforDesktop />
      </Desktop>
      <Mobile>
        <UserInforMobile />
      </Mobile>
    </div>
  );
}
