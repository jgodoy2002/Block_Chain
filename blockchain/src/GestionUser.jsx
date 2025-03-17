import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Select } from "antd";

const GestionUser = () => {
    const [users, setUsers] = useState([
        { id: 1, username: "admin1", role: "administrador" },
        { id: 2, username: "consumidor1", role: "consumidor" },
        { id: 3, username: "proveedor1", role: "proveedor" },
    ]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [form] = Form.useForm();
    
    const showModal = (user = null) => {
        setSelectedUser(user);
        form.setFieldsValue(user || { username: "", role: "", password: "" });
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        form.validateFields().then((values) => {
            if (selectedUser) {
                setUsers(users.map(user => user.id === selectedUser.id ? { ...user, ...values } : user));
            } else {
                setUsers([...users, { id: users.length + 1, ...values }]);
            }
            setIsModalOpen(false);
            form.resetFields();
        });
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        { title: "Username", dataIndex: "username", key: "username" },
        { title: "Rol", dataIndex: "role", key: "role" },
        {
            title: "Acciones",
            key: "actions",
            render: (_, record) => (
                <Button type="primary" onClick={() => showModal(record)}>
                    Editar
                </Button>
            ),
        },
    ];
    
    return (
        <div>
            <Button type="primary" style={{ marginBottom: "10px" }} onClick={() => showModal()}>
                Agregar Usuario
            </Button>
            <Table dataSource={users} columns={columns} rowKey="id" />
            <Modal title={selectedUser ? "Editar Usuario" : "Agregar Usuario"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item name="username" label="Nombre de usuario" rules={[{ required: true, message: "Este campo es obligatorio" }]}> 
                        <Input />
                    </Form.Item>
                    <Form.Item name="role" label="Rol" rules={[{ required: true, message: "Seleccione un rol" }]}> 
                        <Select>
                            <Select.Option value="administrador">Administrador</Select.Option>
                            <Select.Option value="consumidor">Consumidor</Select.Option>
                            <Select.Option value="proveedor">Proveedor</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="password" label="Contraseña" rules={[{ required: true, message: "Ingrese una contraseña" }]}> 
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default GestionUser;
