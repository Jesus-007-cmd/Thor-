import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ManageAreasAndPositions.css';
import logo from '/public/Frame.svg';

const ManageAreasAndPositions = () => {
    const [areas, setAreas] = useState([
        { id: 1, name: 'La gran campaña', position: 'Nombre del cargo', module: 'RRHH', iso: 'ISO 9001' },
    ]);
    const navigate = useNavigate(); 
    const [showAreas, setShowAreas] = useState(true);
    const [showPositions, setShowPositions] = useState(true);
    const [positions, setPositions] = useState([
        { id: 1, name: 'Gerente', area: 'La gran campaña' },
    ]);

    const addPosition = () => {
        setPositions([...positions, { id: positions.length + 1, name: '', area: '' }]);
    };

    const removePosition = (id) => {
        setPositions(positions.filter(position => position.id !== id));
    };

    const toggleAreas = () => setShowAreas(!showAreas);
    const togglePositions = () => setShowPositions(!showPositions);

    const addArea = () => {
        setAreas([...areas, { id: areas.length + 1, name: '', position: '', module: 'RRHH', iso: '' }]);
    };

    const removeArea = (id) => {
        setAreas(areas.filter(area => area.id !== id));
    };

    const progress = 80;

    const handleSave = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { // Tipado del evento
        event.preventDefault();
        navigate('/register-worker'); // Cambiado de history.push a navigate
      };
      
    return (
        <div className="manage-container">
            <div className="card-body">
                <div className="progress-header">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        <span className="progress-text">{progress}%</span>
                    </div>
                </div>

                <h2 className="title">Paso 5: Subir áreas y cargos</h2>
                <p className="subtitle">Para comenzar, sube las áreas y cargos necesarios.</p>

                {areas.map((area, index) => (
                    <div key={index} className="area-section">
                        <h3>Área Nro {index + 1}</h3>
                        <div className="form-group">
                            <label className="form-label">Nombre del Área *</label>
                            <input type="text" className="form-control" placeholder="Nombre del área" value={area.name} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Cargo de mayor jerarquía *</label>
                            <input type="text" className="form-control" placeholder="Nombre del cargo" value={area.position} />
                        </div>
                        <div className="form-group iso-module">
                            <label className="form-label">Asignar Módulo</label>
                            <div className="module-options">
                                <input type="radio" id={`module-rrhh-${index}`} name={`module-${index}`} value="RRHH" checked={area.module === 'RRHH'} />
                                <label htmlFor={`module-rrhh-${index}`}>RRHH</label>
                                <input type="radio" id={`module-iso-${index}`} name={`module-${index}`} value="ISO 9001" checked={area.module === 'ISO 9001'} />
                                <label htmlFor={`module-iso-${index}`}>ISO 9001</label>
                                <input type="text" className="form-control iso-input" value={area.iso} placeholder="ISO 9001" />
                            </div>
                        </div>
                        {index > 0 && (
                            <button type="button" className="remove-area-button" onClick={() => removeArea(area.id)}>
                                Eliminar
                            </button>
                        )}
                    </div>
                ))}



                <h3 className="list-title" onClick={toggleAreas}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        Lista de Áreas <span className="toggle-icon">{showAreas ? '▲' : '▼'}</span>
                        {showAreas && (
                            <button type="button" className="add-area-button" onClick={addArea}>
                                Añadir Área
                            </button>)}
                    </div>
                </h3>

                {showAreas && (
                    <table className="branches-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Cargo Principal</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {areas.map((area, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{area.name}</td>
                                    <td>{area.position}</td>
                                    <td>
                                        <button type="button" className="remove-area-button" onClick={() => removeArea(area.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <h3 className="list-title" onClick={togglePositions}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        Lista de Cargos <span className="toggle-icon">{showPositions ? '▲' : '▼'}</span>
                        {showPositions && (
                            <button type="button" className="add-area-button" onClick={addPosition}>
                                Añadir Cargo
                            </button>)}
                    </div>
                </h3>

                {showPositions && (
                    <div>
                        <table className="branches-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre del Cargo</th>
                                    <th>Área</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {positions.map((position, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{position.name}</td>
                                        <td>{position.area}</td>
                                        <td>
                                            <button className="remove-position-button" onClick={() => removePosition(position.id)}>
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="button-group">
                    <button type="button" className="skip-button">Omitir</button>
                    <button type="button" className="back-button">Volver</button>
                    <button type="button" className="save-button" onClick={handleSave}>Guardar</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageAreasAndPositions;
