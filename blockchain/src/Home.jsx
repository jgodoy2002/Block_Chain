import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home= () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <nav style={{ width: "250px", background: "#1890ff", color: "white", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Blockchain</h2>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {['Panel de Control', 'Registro de Medicamentos', 'Seguimiento', 'Configuración'].map((item, index) => (
            <li key={index}>
              <button style={{
                width: "190px",
                height: "50px",
                borderRadius: "8px",
                border: "none",
                background: "white",
                color: "#1890ff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                textAlign: "center",
                padding: "5px"
              }}>
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button style={{
          width: "150px",
          height: "50px",
          borderRadius: "8px",
          border: "none",
          background: "red",
          color: "white",
          cursor: "pointer",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         
        }} onClick={handleLogout}>
          <FaSignOutAlt size={20} />
        </button>
      </nav>
      <div style={{ flex: 1, padding: "20px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", padding: "10px" }}>
          <h2>Panel de Control</h2>
          <button style={{
            border: "none",
            background: "transparent",
            cursor: "pointer"
          }}>
          </button>
        </header>
        <main style={{ background: "white", padding: "20px" }}>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Home;
