import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProveedorLayout from "./ProveedorLayout";
import ConsumidorLayout from "./ConsumidorLayout";

const MainLayout = () => {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("tipoUsuario"); // "proveedor" o "consumidor"
    if (!userType) {
      navigate("/"); // Si no hay usuario, redirige al login
    } else {
      setTipoUsuario(userType);
    }
  }, [navigate]);

  if (!tipoUsuario) return null; // Evita que renderice antes de verificar el usuario

  return tipoUsuario === "proveedor" ? <ProveedorLayout /> : <ConsumidorLayout />;
};

export default MainLayout;
