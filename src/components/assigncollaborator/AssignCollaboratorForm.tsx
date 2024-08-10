import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AssignCollaboratorForm.css';
import logo from '/public/Frame.svg';
import collaboratorImage from '/public/collaborator.svg';

const AssignCollaboratorForm = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/register-branches'); // Redirigir al formulario inicial
  };


  return (
    <div className="collaborator-container">
      <div className="collaborator-header">
        <img src={logo} alt="Logo" className="logo" />
        <span className="ms-2 logo-text">Iso and Iso</span>
      </div>
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={collaboratorImage} alt="Collaborator" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <div className="title">Asigne un Colaborador</div>
          <p>
            Para completar el registro de su empresa, asigne un colaborador que le ayude a llenar
            la información de las sedes.
          </p>
          <form className="collaborator-form">
            <div className="form-group">
              <label htmlFor="name">Nombre y Apellido</label>
              <input type="text" id="name" className="form-control" placeholder="Datos" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder="email@email.com" />
            </div>
             <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Enviar solicitud</button>
            <button type="button" className="btn btn-link">Omitir</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignCollaboratorForm;
