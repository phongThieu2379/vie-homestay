import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { localStore } from "../../service/localService";
import { setModalOpen } from "../../redux-toolkit/loginModalSlice";

import {
  ExclamationCircleFilled,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Modal } from "antd";
import { NavLink } from "react-router-dom";

export default function UserInfor() {
  const items = [
    {
      key: "1",
      label: <NavLink to="/user-information" className="font-medium text-black">Thông tin người dùng</NavLink>,
    },
    {
      key: "2",
      label: (
        <button
     
          className="text-red-500 hover:text-black w-full"
          onClick={() => handleLogout()}
        >
          Log out
        </button>
      ),
      danger: true,
    },
  ];
  const userInfor = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  let dispatch = useDispatch();
  let handleLogout = () => {
    showConfirm();
  };
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: "Do you want to log out?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        localStore.remove();
        window.location.reload();
      },
      onCancel() {},
    });
  };
  return userInfor ? (
    <div className="flex items-center space-x-4">
      <Dropdown menu={{ items }}>
        <div className=" p-2 rounded-full bg-gray-600 hover:opacity-80 flex items-center justify-center space-x-2">
          <Avatar
            style={{ backgroundColor: "white", color: "black" }}
            size={32}
            icon={
              <img
                style={{ objectPosition: "top center" }}
                src={userInfor.user.avatar}
              />
            }
          />
          <div className="text-white ">{userInfor.user.name}</div>
          <MenuOutlined className="text-white" />
        </div>
      </Dropdown>
    </div>
  ) : (
    <div className="flex items-center space-x-4">
      <Button
        type="primary"
        className=" rounded text-lg"
        onClick={() => dispatch(setModalOpen("dismissible"))}
      >
        Login and Signup
      </Button>
    </div>
  );
}
