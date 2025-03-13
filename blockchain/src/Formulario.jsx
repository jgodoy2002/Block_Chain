import React, { useState } from 'react';
import './Formulario.css'; // Importa un archivo CSS para los estilos
import { useNavigate } from 'react-router-dom';

function Formulario() {
    const [proveedor, setProveedor] = useState("");
    const [marca, setMarca] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ proveedor, marca, descripcion, categoria });
    };

    const handleHome = () => {
        navigate('/home');
    }

    return (
        <div className="crear-producto-container">
            <div className="crear-producto-wrapper">
                <h3>Agregar Medicamento</h3>
                <p>Llene el siguiente formulario para completar la transferencia</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="proveedor">Proveedor</label>
                        <input
                            type="text"
                            className="form-control"
                            id="proveedor"
                            placeholder="Proveedor"
                            value={proveedor}
                            onChange={(e) => setProveedor(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="marca">Marca</label>
                        <input
                            type="text"
                            className="form-control"
                            id="marca"
                            placeholder="Marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                            className="form-control"
                            id="descripcion"
                            rows="3"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoría</label>
                        <input
                            type="text"
                            className="form-control"
                            id="categoria"
                            placeholder="Categoría"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagen">Imagen del Producto</label>
                        <div className="file-upload-mockup">
                            <span>Arrastra y suelta una imagen aquí o</span>
                            <button type="button" className="upload-button">
                                Seleccionar archivo
                            </button>
                          
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                    
                </form>
            </div>
        </div>
    );
}

export default Formulario;