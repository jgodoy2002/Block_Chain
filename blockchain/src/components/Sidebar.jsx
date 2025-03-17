import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, FormOutlined, LogoutOutlined, TransactionOutlined, CloudOutlined} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import MediTrakLogo from "../imagenes/MediTrk.jpg";
const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tipoUsuario = localStorage.getItem("tipoUsuario");

  const menus = {
    proveedor: [
        { key: "/home", icon: <HomeOutlined />, label: "Home" },
        { key: "/formulario", icon: <FormOutlined />, label: "Crear Medicamento" },
        { key: "/transacciones", icon: <TransactionOutlined />, label: "Transacciones" }
    ],
    consumidor: [
        { key: "/home", icon: <HomeOutlined />, label: "Home" },
        { key: "/transacciones", icon: <TransactionOutlined />, label: "Transacciones" }
    ],
    administrador: [
        { key: "/home", icon: <HomeOutlined />, label: "Home" },
        { key: "/gestionuser", icon: <FormOutlined />, label: "Gestión de Usuarios" },
        { key: "/transacciones", icon: <TransactionOutlined />, label: "Ver Transacciones" },
        { key: "/formulario", icon: <FormOutlined />, label: "Crear Medicamento" },
    ]
  };

  const menuItems = menus[tipoUsuario] || [];
  const handleLogut = () => {
    localStorage.removeItem("tipoUsuario");
    navigate("/");
  }
  return (
    <Sider style={{ minHeight: "100vh" }}>
      <div className="logo" style={{ textAlign: "center", padding: "16px" }}>
        <img src={MediTrakLogo} alt="MediTrak Logo" style={{ width: "120px", height: "auto" }} />
      </div>  
      <Menu
          theme="dark"
         mode="inline"
         selectedKeys={[location.pathname]}
         items={[
             ...menuItems.map(item => ({
                 key: item.key,
                 icon: item.icon,
                 label: item.label,
                 onClick: () => navigate(item.key)
             })),
             { key: "/logout", icon: <LogoutOutlined />, label: "Salir", onClick: handleLogut, style: { color: "red" } }
           ]}
      />
    </Sider>
  );
};

export default Sidebar;
