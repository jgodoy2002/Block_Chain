import React from "react";
import { Layout } from "antd";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../Home";
import Transacciones from "../Transacciones";

const { Content } = Layout;

const ConsumidorLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    { key: "/home", icon: <HomeOutlined />, label: "Home", onClick: () => navigate("/home") },
    { key: "/transacciones", icon: <LogoutOutlined />, label: "Transacciones", onClick: () => navigate("/transacciones") },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar items={menuItems} />
      <Layout>
        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/transacciones" element={<Transacciones />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ConsumidorLayout;
