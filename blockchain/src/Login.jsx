import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login successful:", values);
    navigate("/home");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#00ADB5"
    }}>
      <Card style={{ width: 400, textAlign: "center", padding: 20, borderRadius: 10, boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)" }}>
        <h2 style={{ marginBottom: 20 }}>Login</h2>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item name="username" rules={[{ required: false, message: "Por favor ingrese su usuario!" }]}>            
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" style={{ borderRadius: "30px" }} />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: false, message: "Por favor ingrese su contraseña!" }]}>            
            <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" style={{ borderRadius: "30px" }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block style={{ borderRadius: "30px", fontWeight: "bold" }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
