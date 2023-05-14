
import React, { useEffect } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { localStore } from "../service/localService";
import UserInfor from "../Component/Header/UserInfor";
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
  getItem(
    <NavLink to="/admin-user">Users</NavLink>,
    "1",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to="/admin-location">Location</NavLink>,
    "2",
    <DesktopOutlined />
  ),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const AdminLayout = ({ Component }) => {
  // kiểm tra user có phải admin trước khi render nội dung
  // false string rỗng, NaN, null, undefine
  useEffect (()=>{
    // nếu null hoặc object có key maLoaiNguoiDung khác QuanTri thì đá ra trang login
    if(localStore.get()?.maLoaiNguoiDung!=="QuanTri"){

    }
  })
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
            lineHeight:"24px"
          }}
          className=" h-"
        >
            <div className="p-4 flex justify-end"><UserInfor/></div>
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
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* Bill is a cat. */}
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
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout> 
    </div>
    
  );
};
export default AdminLayout;
