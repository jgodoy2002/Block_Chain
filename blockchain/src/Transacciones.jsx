import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const historialTransacciones = {
    101: [
        {
            id: 1,
            medicamento_id: 101,
            entidad_origen: null,
            entidad_destino: "Laboratorios",
            fecha: "2025-02-02",
            ubicacion: "Tegucigalpa, HON",
            hash_transaccion: "0xabc123",
        },
        {
            id: 2,
            medicamento_id: 101,
            entidad_origen: "Laboratorios",
            entidad_destino: "Distribuidora",
            fecha: "2025-02-03",
            ubicacion: "San Pedro Sula, HON",
            hash_transaccion: "0xdef456",
        },
        {
            id: 3,
            medicamento_id: 101,
            entidad_origen: "Distribuidora",
            entidad_destino: "Farmacia Siman",
            fecha: "2025-02-05",
            ubicacion: "El Progreso, HON",
            hash_transaccion: "0xghi789",
        },
    ],
};

const Transacciones = () => {
    const medicamentoId = 101;
    const historial = historialTransacciones[medicamentoId] || [];
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/home");
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Historial de Transacciones</h1>
            {historial.length === 0 ? (
                <p style={styles.noData}>No hay transacciones disponibles.</p>
            ) : (
                <ul style={styles.list}>
                    {historial.map((transaccion, index) => (
                        <li key={transaccion.id} style={styles.listItem}>
                            <strong style={styles.transactionNumber}>
                                Transacción {index + 1}:
                            </strong>
                            <p style={styles.detail}>
                                <span style={styles.label}>Origen:</span>{" "}
                                {transaccion.entidad_origen || "[Fabricante]"}
                            </p>
                            <p style={styles.detail}>
                                <span style={styles.label}>Destino:</span>{" "}
                                {transaccion.entidad_destino}
                            </p>
                            <p style={styles.detail}>
                                <span style={styles.label}>Fecha:</span>{" "}
                                {new Date(transaccion.fecha).toLocaleString()}
                            </p>
                            <p style={styles.detail}>
                                <span style={styles.label}>Ubicación:</span>{" "}
                                {transaccion.ubicacion}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

            <button onClick={handleHome} style={{backgroundColor:"royalblue"}}>Regresar</button>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    title: {
        textAlign: "center",
        color: "#333",
        marginBottom: "20px",
    },
    noData: {
        textAlign: "center",
        color: "#666",
    },
    list: {
        listStyleType: "none",
        padding: "0",
    },
    listItem: {
        backgroundColor: "#fff",
        marginBottom: "10px",
        padding: "15px",
        borderRadius: "5px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    transactionNumber: {
        display: "block",
        fontSize: "1.1em",
        marginBottom: "10px",
        color: "#555",
    },
    detail: {
        margin: "5px 0",
        color: "#444",
    },
    label: {
        fontWeight: "bold",
        color: "#333",
    },
};

export default Transacciones;
