import React, { useEffect, useState } from "react";
import { userService } from "../../../service/userService";
import { Table, message } from "antd";
import { headerUser } from "./UtilitiesAdmin";
import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../../redux-toolkit/spinnerSlice";

export default function AdminUserPage() {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  async function handleDeleteUser(userId) {
    dispatch(setLoadingOnAction());
    try {
      let res = await userService.deleteUser(userId);
      fetchUserList();
      message.success("Xóa user thành công");
      dispatch(setLoadingOffAction());
    } catch (error) {
      console.log(error);
      message.error(`Xóa thất bại : ${error.response.data.content}`);
      dispatch(setLoadingOffAction());
    }
  }
  async function fetchUserList() {
    try {
      let res = await userService.getUserList();
      let userClone = res.data.content.map((item) => {
        return {
          ...item,
          action: (
            <button
              className="bg-red-500 px-2 py-2 rounded"
              onClick={() => handleDeleteUser(item.id)}
            >
              Xóa
            </button>
          ),
        };
      });
      setUserList(userClone);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <div>
      <Table dataSource={userList} columns={headerUser} />
    </div>
  );
}
