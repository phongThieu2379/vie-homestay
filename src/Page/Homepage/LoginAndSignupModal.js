import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../service/userService";
import { setLoginAction } from "../../redux-toolkit/userSlice";
import { localStore } from "../../service/localService";
import { setModalClose } from "../../redux-toolkit/loginModalSlice";

const LoginAndSignupModal = () => {
  const { modalIsOpen } = useSelector((state) => {
    return state.loginModalSlice;
  });

  const handleCancel = () => {
    dispatch(setModalClose());
  };
  let dispatch = useDispatch();
  const onFinish = (value) => {
    userService
      .postLogin(value)
      .then((res) => {
        dispatch(setLoginAction(res.data.content));
        localStore.set(res.data.content);
        message.success("Login thành công");
        window.location.reload();
        dispatch(setModalClose());
      })
      .catch((err) => {
        console.log(err);
        message.error("Login thất bại");
      });
  };
  const onFinishSignUp = (value) => {
    userService
      .postSignUp(value)
      .then((res) => {
        message.success("Signup thành công");
        console.log(res);
        dispatch(setModalClose());
      })
      .catch((err) => {
        console.log(err);
        message.error("Signup thất bại");
      });
  };
  return (
    <div
      id="defaultModalLogin"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <Modal
          title="Login and Signup"
          open={modalIsOpen}
          onCancel={handleCancel}
        >
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
                Login
              </Button>
            </Form.Item>
          </Form>
          <Divider className="py-5">or Signup in below</Divider>
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
            onFinish={onFinishSignUp}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

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
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Select Gender">
              <Select>
                <Select.Option value="true">Male</Select.Option>
                <Select.Option value="false">Female</Select.Option>
              </Select>
            </Form.Item>

            {/* enable these if you want to create admin role */}
            {/* <Form.Item name="role" label="Select Role">
              <Select>
                <Select.Option value="ADMIN">ADMIN</Select.Option>
                <Select.Option value="USER">USER</Select.Option>
              </Select>
            </Form.Item> */}
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
export default LoginAndSignupModal;
