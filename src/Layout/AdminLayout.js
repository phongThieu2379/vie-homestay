import React, { useEffect } from "react";
import {
  UserOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { localStore } from "../service/localService";
import UserInfor from "../Component/Header/UserInfor/UserInfor";

// import Header from "../Component/Header"
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to="/admin-user">Users</NavLink>, "1", <UserOutlined />),
  getItem(
    <NavLink to="/admin-location">Location</NavLink>,
    "2",
    <DesktopOutlined />
  ),
];
const AdminLayout = ({ Component }) => {
  // kiểm tra user có phải admin trước khi render nội dung
  let navigate = useNavigate()
  useEffect(() => {
    // nếu null hoặc object có key role khác ADMIN thì đá ra trang homepage
    if (localStore.get()?.user.role !== "ADMIN") {
      navigate("/homepage")
    }
  });
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              lineHeight: "24px",
            }}
            className=" h-"
          >
            <div className="p-4 flex justify-end">
              <UserInfor />
            </div>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>User list</Breadcrumb.Item>
              
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {/* Content start */}
              <Component />
              {/* Content end */}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Thông tin admin
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default AdminLayout;
