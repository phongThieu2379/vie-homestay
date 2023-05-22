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
      <button disabled={true} onClick={()=>{console.log("hello");}}></button>
      <button
        data-modal-target="defaultModalLogin"
        data-modal-hide="defaultModal"
        className="bg-red-500 rounded p-2"
        onClick={()=>handleLogout()}
      >
        Log out
      </button>
      
    </div>
  ) : (
    <div className="flex items-center space-x-4">
      <button
        data-modal-target="defaultModalLogin"
        data-modal-show="defaultModalLogin"
        className="bg-green-500 rounded p-2"
      >
        Login
      </button>
      <button
        data-modal-target="defaultModalLogin"
        data-modal-show="defaultModalLogin"
        className="bg-yellow-500 rounded p-2"
      >
        Sign up
      </button>
    </div>
  );
}
