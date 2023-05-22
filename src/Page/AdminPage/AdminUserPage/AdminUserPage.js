import React, { useEffect, useState } from "react";
import { userService } from "../../../service/userService";
import { Table, message } from "antd";
import { headerUser } from "./UtilitiesAdmin";

export default function AdminUserPage() {
  const [userList, setUserList] = useState([]);
  async function handleDeleteUser(userId) {
    try {
      let res = await userService.deleteUser(userId);
      fetchUserList();
      message.success("Xóa user thành công");
    } catch (error) {
      console.log(error);
      message.error(`Xóa thất bại : ${error.response.data.content}`);
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
