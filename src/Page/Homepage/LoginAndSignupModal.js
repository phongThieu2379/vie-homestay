import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { userService } from "../../service/userService";
import { setLoginAction } from "../../redux-toolkit/userSlice";
import axios from "axios";
import { localStore } from "../../service/localService";
const LoginAndSignupModal = () => {
  let dispatch = useDispatch();
  const onFinish = (value) => {
    userService
      .postLogin(value)
      .then((res) => {
        
        dispatch(setLoginAction(res.data.content));
        localStore.set(res.data.content);
        console.log(res.data.content);
        message.success("Login thành công");
      })
      .catch((err) => {
        console.log(err);
        message.error("Login thất bại");
      });
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginAndSignupModal;
