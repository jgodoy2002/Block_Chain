// src/components/Formulario.jsx
import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Formulario = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    // Verificar si el usuario ha iniciado sesión
    useEffect(() => {
        const userRole = localStorage.getItem('tipoUsuario');
        if (!userRole) {
            // Si el usuario no ha iniciado sesión, redirigir al login
            message.warning('Debes iniciar sesión para acceder a esta página');
            navigate('/login');
        }
    }, [navigate]);

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
            <Title level={3}>Agregar Medicamento</Title>
            <p>Llene el siguiente formulario para completar la transferencia</p>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item label="Proveedor" name="proveedor" rules={[{ required: true, message: "Ingrese el proveedor" }]}> 
                    <Input placeholder="Proveedor" />
                </Form.Item>

                <Form.Item label="Marca" name="marca" rules={[{ required: true, message: "Ingrese la marca" }]}> 
                    <Input placeholder="Marca" />
                </Form.Item>

                <Form.Item label="Descripción" name="descripcion"> 
                    <Input.TextArea rows={3} placeholder="Descripción" />
                </Form.Item>

                <Form.Item label="Categoría" name="categoria"> 
                    <Input placeholder="Categoría" />
                </Form.Item>

                <Form.Item label="Imagen del Producto" name="imagen">
                    <Upload beforeUpload={() => false} maxCount={1}>
                        <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Enviar</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Formulario;
