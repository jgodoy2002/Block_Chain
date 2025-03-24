// src/components/Login.jsx
import React from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        console.log('Datos del formulario:', values);
    
        const { name, password } = values;
    
        try {
            console.log('Intentando conexión con el backend...');
            console.log('Enviando los siguientes datos:', { name, password });
    
            // Intentando la solicitud
            const response = await axios.post('http://localhost:3001/api/login', {
                name: name,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            //console.log('Respuesta completa del backend:', response);
            console.log('Datos recibidos:', response.data);
    
            if (response.data && response.data.role) {
                console.log('Rol del usuario:', response.data.role);
                localStorage.setItem('tipoUsuario', response.data.role);
                navigate('/home');
            } else {
                message.error(response.data.error || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
    
            // Si el error tiene una respuesta, podemos ver más detalles
            if (error.response) {
                console.log('Error en la respuesta del servidor:', error.response);
                console.log('Código de estado:', error.response.status);
                console.log('Detalles del error:', error.response.data);
            }
    
            message.error('No se pudo conectar con el servidor');
        }
    };
    
    
    
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Inicio de sesión" style={{ width: 300 }}>
                <Form form={form} onFinish={handleLogin}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Ingrese su nombre de usuario' }]}
                    >
                        <Input placeholder="Nombre de usuario" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Ingrese su contraseña' }]}
                    >
                        <Input.Password placeholder="Contraseña" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Iniciar sesión
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
