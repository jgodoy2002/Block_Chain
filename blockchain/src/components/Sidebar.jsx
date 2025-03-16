import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, FormOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider collapsible style={{ minHeight: "100vh" }}>
      <div className="logo" style={{ color: "white", textAlign: "center", padding: "16px" }}>
        <h2>BlockChain</h2>
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={items} />
    </Sider>
  );
};

export default Sidebar;
