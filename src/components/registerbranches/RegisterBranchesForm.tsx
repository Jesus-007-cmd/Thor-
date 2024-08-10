import React, { useState } from 'react';
import './RegisterBranchesForm.css';
import { useNavigate } from 'react-router-dom'; 
import logo from '/public/Frame.svg';

const RegisterBranchesForm = () => {
  const navigate = useNavigate(); 
  const [branches, setBranches] = useState([
    { id: 1, name: '', address: '', city: '', state: '' },
  ]);

  const sedes = ([
    { vNombre: 'Sede Norte', vDireccion: 'Av. Principal 123', iId_Ubigeo: 'Lima', iId_Estado: 'Activo' },
    { vNombre: 'Sede Sur', vDireccion: 'Calle Secundaria 456', iId_Ubigeo: 'Cusco', iId_Estado: 'Activo' },
    { vNombre: 'Sede Este', vDireccion: 'Calle Secundaria 325', iId_Ubigeo: 'Cusco', iId_Estado: 'Activo' },
  ]);

  const [showBranches, setShowBranches] = useState(false);

  const toggleBranches = () => {
    setShowBranches(!showBranches);
  };

  const addBranch = () => {
    setBranches([...branches, { id: branches.length + 1, name: '', address: '', city: '', state: '' }]);
  };


  
  const handleNext = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { // Tipado del evento
    event.preventDefault();
    navigate('/manage-areas-positions'); // Cambiado de history.push a navigate
  };
  const progress = 60;

  return (
    <div className="register-container">
      <div className="card-body">
        <div className="progress-header">
          <img src={logo} alt="Company Logo" className="logo" />
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <h2 className="title">Paso 4: Registra de sedes</h2>
        <p className="subtitle">Para comenzar el proceso de registro, por favor suministre los datos requeridos a continuación.</p>
        
        <div className="parts">
        <h3>Sede</h3>
          <div className="part1">
            
            <div className="form-group">
              <label className="form-label">Nombre de la sede *</label>
              <input type="text" className="form-control" placeholder="Nombre de la sede" />
            </div>
            <div className="form-group">
              <label className="form-label">Dirección *</label>
              <input type="text" className="form-control" placeholder="Dirección" />
            </div>
          </div>

          <div className="part2">
            <div className="form-group">
              <label className="form-label">Ciudad *</label>
              <input type="text" className="form-control" placeholder="Ciudad" />
            </div>
            <div className="form-group">
              <label className="form-label">Estado/Provincia *</label>
              <input type="text" className="form-control" placeholder="Estado/Provincia" />
            </div>
          </div>
        </div>

        {/* Botón para añadir nueva sede */}
        <button type="button" className="add-branch-button" onClick={addBranch}>
          Añadir sede
        </button>

        <h3 className="list-title" onClick={toggleBranches}>
          Lista de Sedes 
          <span className="toggle-icon">{showBranches ? '▲' : '▼'}</span>
        </h3>

        {showBranches && (
          <table className="branches-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Ciudad</th>
                <th>Estado/Provincia</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {sedes.map((sede, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{sede.vNombre}</td>
                  <td>{sede.vDireccion}</td>
                  <td>{sede.iId_Ubigeo}</td>
                  <td>{sede.iId_Estado}</td>
                  <td>
                    <button className="remove-branch-button" > {/*onClick={() => removeBranch(index)}>*/}
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="button-group">
          <button type="button" className="back-button">Volver</button>
          <button type="button" className="next-button" onClick={handleNext}>Siguiente</button>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterBranchesForm;
