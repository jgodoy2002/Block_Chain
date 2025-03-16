import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const tipoUsuario = values.username === "proveedor" ? "proveedor" : "consumidor";
    localStorage.setItem("tipoUsuario", tipoUsuario);
    navigate("/home");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#00ADB5" }}>
      <Card style={{ width: 350, padding: "20px", textAlign: "center" }}>
        <Title level={2}>Login</Title>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Ingrese su usuario" }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Ingrese su contraseña" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>Login</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
