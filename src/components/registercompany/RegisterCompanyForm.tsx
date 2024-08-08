import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Cambiado de useHistory a useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/public/Frame.svg';
import analyticsImage from '/public/undraw_real_time_analytics.svg';
import './RegisterCompanyForm.css';

const RegisterCompanyForm = () => {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const navigate = useNavigate(); // Cambiado de useHistory a useNavigate

  const handleRegisterClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { // Tipado del evento
    event.preventDefault();
    navigate('/select-country-iso'); // Cambiado de history.push a navigate
  };

  return (

    <div className="container">
      <div className="card-body text-start">

        <div className="row w-100">
          <div className="col-md-6 d-flex flex-column  justify-content-center align-items-center">
            <div className="d-flex align-items-center mb-4">
              <div className="logo"><img src={logo} alt="Company Logo" /></div>
              <span className="ms-2 logo-text">ISO and ISO</span>
            </div>
            <div className="imgmanworld d-flex justify-content-center"><img src={analyticsImage} alt="Analytics" className="img-fluid mt-4" /> </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="company-register">Registre su Empresa</div>
            <form>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="email@email.com" />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Ingrese una contraseña" />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="confirm-password" className="form-label">Confirmar contraseña</label>
                <input type="password" className="form-control" id="confirm-password" placeholder="Confirmar contraseña" />
              </div>
              <div className="form-check mb-3 text-start">
                <input className="form-check-input" type="checkbox" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  Acepto los <a href="#">Términos & Condición</a>
                </label>
              </div>
              <div className="form-check mb-3 text-start">
                <input className="form-check-input" type="checkbox" id="addPhone" onChange={(e) => setShowPhoneInput(e.target.checked)} />
                <label className="form-check-label" htmlFor="addPhone">
                  Agregar un número celular
                </label>
              </div>

              {showPhoneInput && (
                <div className="mb-3 text-start">
                  <label htmlFor="phone" className="form-label">Número de celular</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Ingrese su número de celular" />
                </div>)}
                <button type="submit" className="btn btn-primary form-control" onClick={handleRegisterClick}>Registrar empresa</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};
export default RegisterCompanyForm;