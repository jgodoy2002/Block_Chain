import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Routes,Route,useNavigate } from "react-router-dom";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import Home from '../Home';
import GestionUser from '../GestionUser';
import Formulario from '../Formulario';
import Transacciones from "../Transacciones";

const { Content } = Layout;

const AdministradorLayout = () => {
    const navigate = useNavigate();

    const menuItems = [
        { key: "/home", icon: <HomeOutlined />, label: "Home", onClick: () => navigate("/home") },
        { key: "/gestionuser", icon: <LogoutOutlined />, label: "Gestion de Usuarios", onClick: () => navigate("/gestionuser") },
        { key: "/formulario", icon: <LogoutOutlined />, label: "Formulario", onClick: () => navigate("/formulario") },
        { key: "/transacciones", icon: <LogoutOutlined />, label: "Transacciones", onClick: () => navigate("/transacciones") },
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar items={menuItems}/>
            <Layout>
                <Content style={{ padding: "20px" }}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/gestionuser" element={<GestionUser />} />
                        <Route path="/formulario" element={<Formulario />} />
                        <Route path="/transacciones" element={<Transacciones />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdministradorLayout;
