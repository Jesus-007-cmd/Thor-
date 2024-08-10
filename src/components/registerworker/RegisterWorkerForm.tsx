import  { useState } from 'react';
import './RegisterWorkerForm.css';
import logo from '/public/Frame.svg'; // Asegúrate de que la ruta del logo sea correcta

const RegisterWorkerForm = () => {
  const workers= ([
    {
      id: 1,
      dni: '12345678',
      lastName: 'Pérez',
      motherLastName: 'González',
      names: 'Juan Carlos',
      address: 'Distrito Central, Calle 123',
      workEmail: 'juan.perez@empresa.com',
      personalEmail: 'juan.perez@gmail.com',
      nationality: 'Peruano',
      gender: 'Masculino',
      civilStatus: 'Soltero',
      birthDate: '1985-05-15',
      personalPhone: '987654321',
      facialRecognition: 'Sí',
      digitalSignature: 'Sí',
      area: 'Recursos Humanos',
      position: 'Gerente',
      role: 'Administrador',
      areaEntryDate: '2020-01-10',
      companyEntryDate: '2015-03-20',
      status: 'Activo',
      workLocation: 'Sede Central',
    },
    {
      id: 2,
      dni: '87654321',
      lastName: 'Ramírez',
      motherLastName: 'López',
      names: 'María Luisa',
      address: 'Distrito Norte, Avenida 456',
      workEmail: 'maria.ramirez@empresa.com',
      personalEmail: 'maria.ramirez@gmail.com',
      nationality: 'Peruana',
      gender: 'Femenino',
      civilStatus: 'Casada',
      birthDate: '1990-07-25',
      personalPhone: '987654322',
      facialRecognition: 'No',
      digitalSignature: 'Sí',
      area: 'Finanzas',
      position: 'Contadora',
      role: 'Usuario',
      areaEntryDate: '2018-05-15',
      companyEntryDate: '2016-04-10',
      status: 'Activo',
      workLocation: 'Sede Norte',
    }
  ]);

  const [showWorkers, setShowWorkers] = useState(true);
  const progress = 100;

  const toggleWorkers = () => setShowWorkers(!showWorkers);

  const handleAddWorker = () => {
    // Lógica para agregar un nuevo trabajador
  };

  return (
    <div className="register-worker-container">
      <div className="progress-header">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <span className="progress-text">{progress}%</span>
        </div>
      </div>

      <h2 className="title">Registrar al Trabajador</h2>
      <p className="subtitle">Complete la información para registrar un nuevo trabajador en el sistema.</p>

      <form className="worker-form">
        <div className="form-group">
          <label>DNI:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Apellido Paterno:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Apellido Materno:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Nombres:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Dirección:</label>
          <input type="text" className="form-control" placeholder="Debe escribir el distrito y una dirección" />
        </div>

        <div className="form-group">
          <label>Correo de Trabajo:</label>
          <input type="email" className="form-control" />
        </div>

        <div className="form-group">
          <label>Correo Personal:</label>
          <input type="email" className="form-control" />
        </div>

        <div className="form-group">
          <label>Nacionalidad:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Género:</label>
          <select className="form-control">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        <div className="form-group">
          <label>Estado Civil:</label>
          <select className="form-control">
            <option value="Soltero">Soltero</option>
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Conviviente">Conviviente</option>
            <option value="Viudo">Viudo/a</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fecha de Nacimiento:</label>
          <input type="date" className="form-control" />
        </div>

        <div className="form-group">
          <label>Teléfono Personal:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Reconocimiento Facial:</label>
          <select className="form-control">
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Firma Digital:</label>
          <select className="form-control">
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Área:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Cargo:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Rol del Sistema Digitalizado:</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Fecha de Ingreso al Área:</label>
          <input type="date" className="form-control" />
        </div>

        <div className="form-group">
          <label>Fecha de Ingreso a la Empresa:</label>
          <input type="date" className="form-control" />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select className="form-control">
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sede de Trabajo:</label>
          <input type="text" className="form-control" />
        </div>

        <button type="button" className="submit-button" onClick={handleAddWorker}>
          Registrar Trabajador
        </button>
      </form>

      <h3 className="list-title" onClick={toggleWorkers}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Lista de Trabajadores <span className="toggle-icon">{showWorkers ? '▲' : '▼'}</span>
        </div>
      </h3>

      {showWorkers && (
        <table className="workers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DNI</th>
              <th>Nombre Completo</th>
              <th>Área</th>
              <th>Cargo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.id}>
                <td>{worker.id}</td>
                <td>{worker.dni}</td>
                <td>{`${worker.names} ${worker.lastName} ${worker.motherLastName}`}</td>
                <td>{worker.area}</td>
                <td>{worker.position}</td>
                <td>
                  <button className="remove-worker-button">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegisterWorkerForm;
