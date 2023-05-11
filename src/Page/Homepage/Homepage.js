import React from "react";
import LoginAndSignupModal from "./LoginAndSignupModal";
import RoomList from "./RoomList";

export default function Homepage() {
  return (
    <div>
      <LoginAndSignupModal />
      <RoomList />
    </div>
  );
}
