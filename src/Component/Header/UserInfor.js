import React from "react";
import { useSelector } from "react-redux";
import { localStore } from "../../service/localService";

export default function UserInfor() {
  const userInfor = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  let handleLogout = () => {
    localStore.remove();
    window.location.reload();
  };
  return userInfor ? (
    <div className="flex items-center space-x-4">
      <div>{userInfor.user.name}</div>
      <button className="bg-red-400 rounded p-2" onClick={handleLogout}>Log out</button>
    </div>
  ) : (
    <div className="flex items-center space-x-4">
      <button className="bg-green-400 rounded p-2" >Login</button>
      <button  className="bg-yellow-400 rounded p-2">Sign up</button>
    </div>
  );
}
