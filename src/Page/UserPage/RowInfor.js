import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React, { memo, useState } from "react";
import { userService } from "../../service/userService";
import { useSelector } from "react-redux";

function RowInfor({ infor, value, nameInfor,fetchUserInfor }) {
  let { user } = useSelector((state) => {
    return state.userSlice.userInfor;
  });
  const [isHidden, setIsHidden] = useState(true);
  
  const onFinishUpdate = async (data) => {
    try {
      let res = await userService.putUpdateUserInfo(user.id, data);
      setIsHidden(true)
      fetchUserInfor(user.id)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  const renderForm = () => {
    switch (nameInfor) {
      case "birthday":
        return (
          <Form.Item name="birthday" label="">
            <DatePicker />
          </Form.Item>
        );
      case "gender":
        return (
          <Form.Item  name="gender" label="">
            <Select placeholder="Chọn giới tính" >
              <Select.Option value="true">Male</Select.Option>
              <Select.Option value="false">Female</Select.Option>
            </Select>
          </Form.Item>
        );

      default:
        return (
          <Form.Item
            label=""
            name={nameInfor}
            rules={[
              {
                required: true,
                message: `Please input your ${infor}!`,
              },
            ]}
          >
            <Input placeholder={infor} />
          </Form.Item>
        );
    }
  };
  const renderRow = (value) => {
    switch (nameInfor) {
      case "birthday":
        let d = new Date(value).toLocaleString().split(",")[0];
        return (
          <Row>
            <Col className="font-extrabold mr-4" span={6}>
              {infor}
            </Col>
            <Col span={12}>{d}</Col>
            <Col span={2} push={3}>
              <button
                onClick={toggleHidden}
                className=" hover:opacity-90 transition-all ease-linear  bg-gray-700 flex items-center justify-center w-6 h-6 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
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
            </Col>
          </Row>
        );
      case "gender":
        let gender = "";
        if (value === true) {
          gender = "Nam";
        } else {
          gender = "Nữ";
        }
        return (
          <Row>
            <Col className="font-extrabold mr-4" span={6}>
              {infor}
            </Col>
            <Col span={12}>{gender}</Col>
            <Col span={2} push={3}>
              <button
                onClick={toggleHidden}
                className=" hover:opacity-90 transition-all ease-linear  bg-gray-700 flex items-center justify-center w-6 h-6 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
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
            </Col>
          </Row>
        );

      default:
        return (
          <Row>
            <Col className="font-extrabold mr-4" span={6}>
              {infor}
            </Col>
            <Col span={12}>{value}</Col>
            <Col span={2} push={3}>
              <button
                onClick={toggleHidden}
                className=" hover:opacity-90 transition-all ease-linear  bg-gray-700 flex items-center justify-center w-6 h-6 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
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
            </Col>
          </Row>
        );
    }
  };
  return (
    <div>
      {renderRow(value)}
      <Form
        hidden={isHidden}
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishUpdate}
        autoComplete="off"
      >
        {renderForm()}

        <Form.Item
          wrapperCol={{
            offset: 18,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default memo(RowInfor);
