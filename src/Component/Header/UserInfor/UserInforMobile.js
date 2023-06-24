import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localStore } from "../../../service/localService";
import { setModalOpen } from "../../../redux-toolkit/loginModalSlice";

import {
  ExclamationCircleFilled,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Modal } from "antd";
import { NavLink } from "react-router-dom";

export default function UserInforMobile() {
  const userInfor = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (userInfor) {
      setItems(itemsDidLogin);
    } else {
      setItems(itemsNotLogin);
    }
  }, [userInfor]);
  let dispatch = useDispatch();
  const itemsDidLogin = [
    {
      key: "1",
      label: (
        <div className="text-center text-white bg-gray-700 rounded ">{userInfor?.user.name}</div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center w-full ">
          <NavLink
            to="/user-information"
            className="font-medium text-black  w-full text-center"
          >
            Thông tin người dùng
          </NavLink>
        </div>
      ),
    },
    {
      key: "3",
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

  const itemsNotLogin = [
    {
      key: "1",
      label: (
        <Button
          className="text-gray-500 w-full"
          onClick={() => dispatch(setModalOpen("dismissible"))}
        >
          Login OR Signup
        </Button>
      ),
    },
  ];

  let handleLogout = () => {
    showConfirm();
  };
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: "Do you want to log out?",
      icon: <ExclamationCircleFilled />,
      content: "You are going to be logout, please confirm",
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
        <div className=" z-10 p-2 rounded-full bg-gray-600 hover:opacity-80 flex items-center justify-center space-x-2">
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
          
          <MenuOutlined className="text-white" />
        </div>
      </Dropdown>
    </div>
  ) : (
    <Dropdown menu={{ items }}>
      <div className=" p-2 rounded-full bg-gray-600 hover:opacity-80 flex items-center justify-center space-x-2">
        <Avatar
          style={{ backgroundColor: "white", color: "black" }}
          size={32}
          icon={<UserOutlined />}
        />

        <MenuOutlined className="text-white" />
      </div>
    </Dropdown>
  );
}
