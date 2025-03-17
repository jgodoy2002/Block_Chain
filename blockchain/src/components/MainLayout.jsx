import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProveedorLayout from "./ProveedorLayout";
import ConsumidorLayout from "./ConsumidorLayout";
import AdministradorLayout from "./AdministradorLayout";

const MainLayout = () => {
    const [tipoUsuario, setTipoUsuario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userType = localStorage.getItem("tipoUsuario");
        if (!userType) {
            navigate("/"); // Si no hay usuario, redirige al login
        } else {
            setTipoUsuario(userType);
        }
    }, [navigate]);

    if (!tipoUsuario) return null;

    switch (tipoUsuario) {
        case "proveedor":
            return <ProveedorLayout />;
        case "consumidor":
            return <ConsumidorLayout />;
        case "administrador":
            return <AdministradorLayout />;
        default:
            return <div>No autorizado</div>; // Manejo de errores
    }
};

export default MainLayout;
