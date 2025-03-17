import React from "react";
import { Form, Input, Button, Select, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        localStorage.setItem("tipoUsuario", values.tipoUsuario);
        navigate("/home");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#00ADB5" }}>
            <Card style={{ width: 350, padding: "20px", textAlign: "center" }}>
                <Title level={2}>Login</Title>
                <Form onFinish={onFinish}>
                    <Form.Item name="username" rules={[{ required: false, message: "Ingrese su usuario" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: false, message: "Ingrese su contraseña" }]}>
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="tipoUsuario" rules={[{ required: false, message: "Seleccione un tipo de usuario" }]}>
                        <Select placeholder="Seleccione su rol">
                            <Option value="proveedor">Proveedor</Option>
                            <Option value="consumidor">Consumidor</Option>
                            <Option value="administrador">Administrador</Option>
                        </Select>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" block>Login</Button>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
