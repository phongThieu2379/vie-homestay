import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../../service/userService";
import { Button, Divider, Modal } from "antd";
import { localStore } from "../../../service/localService";
import ReservationRoom from "../ReservationRoom";
import UserUpdateModal from "../UserUpdateModal/UserUpdateModal";
import { setLoginAction } from "../../../redux-toolkit/userSlice";
import { UserOutlined } from "@ant-design/icons";

export default function UserPage() {
  if (localStore.get()?.user == null) {
    window.location.href = "/homepage";
  }
  const [userInfor, setUserInfor] = useState({});
  let  localUser  = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  let dispatch = useDispatch();
  const fetchUserInfor = async (id) => {
    try {
      let res = await userService.getUserInfor(id);
      setUserInfor(res.data.content);
      let updateUser = {...localUser,user:res.data.content}
      dispatch(setLoginAction(updateUser));
      localStore.set(updateUser);
    } catch (error) {
      console.log(error);
    }
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  
  const handleCancel = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    fetchUserInfor(localUser.user.id);
    
  }, [localUser.user.id]);
  let renderAvatar = () => {
    if (localUser.user.avatar !== "") {
      return <img
      className="mx-auto rounded-full"
      style={{
        width: 200,
        height: 200,
        objectFit: "cover",
        objectPosition: "center top",
      }}
      src={userInfor.avatar}
    />
    } else {
      return < UserOutlined className="mx-auto rounded-full"
      style={{
        width: 200,
        height: 200,
        objectFit: "cover",
        objectPosition: "center top",
        fontSize:150
      }} />
    }
  }
  return (
    <div className="container mx-auto">
      <div className="p-5 flex flex-col laptop:flex-row ">
        <div className="p-5 px-0 laptop:px-5">
          <div className="space-y-2 w-full laptop:w-80 shadow-md p-5 rounded-md ">
            <div className="relative items-center flex">
              {renderAvatar()}
              <button
                onClick={handleOpenModal}
                className="absolute hover:opacity-90 transition-all ease-linear bottom-0 right-16 tablet:right-48 laptop:right-14 bg-gray-700 flex items-center justify-center w-12 h-12 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
            <h1>Xin chào, tôi là {userInfor.name}</h1>
            <h4>Xác minh danh tính</h4>
            <p>Xác thực danh tính của bạn vơi huy hiệu xác minh</p>
            <Button>Nhận lấy huy hiệu</Button>
            <Divider className="py-5"></Divider>
            <h4><span className="capitalize">{userInfor.name}</span> đã xác nhận</h4>
          </div>
        </div>
        <div className="p-5 space-y-4 laptop:ml-4 m-1 grow">
          <h1 className="font-bold">Phòng đã thuê</h1>
          <div className="divide-y divide-slate-200">
            <ReservationRoom user={localUser.user} />
          </div>
        </div>
      </div>
      <Modal title="Chỉnh sửa thông tin khách hàng"
          open={modalIsOpen}
          onCancel={handleCancel}
      
          
      >
        <UserUpdateModal fetchUserInfor={fetchUserInfor} userInfor={userInfor} />
      </Modal>
    </div>
  );
}
