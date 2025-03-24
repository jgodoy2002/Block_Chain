import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProveedorLayout from "./ProveedorLayout";
import ConsumidorLayout from "./ConsumidorLayout";
import AdministradorLayout from "./AdministradorLayout";

const MainLayout = () => {
    const [tipoUsuario, setTipoUsuario] = useState(localStorage.getItem("tipoUsuario"));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            const userType = localStorage.getItem("tipoUsuario");
            console.log("el userType", userType);
            if (!userType) {
                navigate("/"); // Si no hay usuario, redirige al login
            } else {
                setTipoUsuario(userType); // Actualizar el estado
            }
        };

        // Escuchar cambios en localStorage
        window.addEventListener("storage", handleStorageChange);
        handleStorageChange(); // Llamar la función una vez para actualizar de inmediato

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [navigate]);

    console.log("el rol es:", tipoUsuario);

    if (tipoUsuario === "fabricante") {
        console.log("El fabricante");
        return <ProveedorLayout />;
    } else if (tipoUsuario === "admin") {
        console.log("El admin");
        return <AdministradorLayout />;
    } else if (tipoUsuario === "consumidor") {
        console.log("El consumer");
        return <ConsumidorLayout />;
    }

    return <div>No autorizado</div>; // Manejo de errores
};


export default MainLayout;
