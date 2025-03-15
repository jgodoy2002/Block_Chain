import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, LogoutOutlined, FormOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Sider collapsible style={{ minHeight: "100vh" }}>
            <div className="logo" style={{ color: "white", textAlign: "center", padding: "16px" }}>
                <h2>BlockChain</h2>
            </div>
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
                <Menu.Item key="/home" icon={<HomeOutlined />} onClick={() => navigate("/home")}>Home</Menu.Item>
                <Menu.Item key="/formulario" icon={<FormOutlined />} onClick={() => navigate("/formulario")}>Crear Medicamento</Menu.Item>
                <Menu.Item key="/logout" icon={<LogoutOutlined />} onClick={() => navigate("/")}>Salir</Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
