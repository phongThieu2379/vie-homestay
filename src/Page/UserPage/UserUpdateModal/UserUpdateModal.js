import React, { memo, useState } from "react";
import RowInfor from "../RowInfor";
import { Modal } from "antd";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { userService } from "../../../service/userService";
import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../../redux-toolkit/spinnerSlice";

function UserUpdateModal({ userInfor, fetchUserInfor }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let dispatch = useDispatch();

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCancel = () => {
    setModalIsOpen(false);
  };

  const handleUpload = async (options) => {
    const { onSuccess, onError, file } = options;
    dispatch(setLoadingOnAction());
    try {
      const formData = new FormData();
      formData.append("formFile", file);
      const res = await userService.postUploadAvatar(formData);
      message.success(`${file.name} file uploaded successfully.`); // Notify Antd Upload component about successful upload
      fetchUserInfor(userInfor.id); // Fetch updated user information
      dispatch(setLoadingOffAction());
      onSuccess(res);
    } catch (error) {
      console.log(error);
      message.error(`${file.name} file upload failed.`);

      onError(error); // Notify Antd Upload component about upload error
    }
  };

  return (
    <div className="space-y-3">
      <Modal
        title="Update avatar của khách hàng"
        open={modalIsOpen}
        onCancel={handleCancel}
      >
        <Upload.Dragger
          multiple={false} // Allow only single file upload
          customRequest={handleUpload}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Upload.Dragger>
      </Modal>

      <div className="relative items-center flex">
        <img
          className="mx-auto rounded-full"
          style={{
            width: 200,
            height: 200,
            objectFit: "cover",
            objectPosition: "center top",
          }}
          src={userInfor.avatar}
        />
        <button
          onClick={handleOpenModal}
          className="absolute hover:opacity-90 transition-all ease-linear bottom-0 right-16 tablet:right-36 bg-gray-700 flex items-center justify-center w-12 h-12 rounded-full"
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
      <RowInfor
        infor="Tên người dùng"
        nameInfor="name"
        value={userInfor.name}
        fetchUserInfor={fetchUserInfor}
      />
      <RowInfor infor="Email" nameInfor="email" value={userInfor.email} />
      <RowInfor
        infor="Số điện thoại"
        nameInfor="phone"
        value={userInfor.phone}
        fetchUserInfor={fetchUserInfor}
      />
      <RowInfor
        infor="Ngày sinh"
        nameInfor="birthday"
        value={userInfor.birthday}
        fetchUserInfor={fetchUserInfor}
      />
      <RowInfor
        infor="Giới tính"
        nameInfor="gender"
        value={userInfor.gender}
        fetchUserInfor={fetchUserInfor}
      />
    </div>
  );
}
export default memo(UserUpdateModal);
