import React from "react";
import { Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

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

    return (
        <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
            <Title level={2} style={{ textAlign: "center" }}>Historial de Transacciones</Title>
            <Row gutter={[16, 16]}>
                {historial.map((transaccion, index) => (
                    <Col span={24} key={transaccion.id}>
                        <Card>
                            <Title level={4}>Transacción {index + 1}:</Title>
                            <p><strong>Origen:</strong> {transaccion.entidad_origen || "[Fabricante]"}</p>
                            <p><strong>Destino:</strong> {transaccion.entidad_destino}</p>
                            <p><strong>Fecha:</strong> {new Date(transaccion.fecha).toLocaleString()}</p>
                            <p><strong>Ubicación:</strong> {transaccion.ubicacion}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
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
