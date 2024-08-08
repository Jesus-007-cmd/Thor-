import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterCompanyForm from './components/registercompany/RegisterCompanyForm';
import SelectCountryAndISOForm from './components/SelectCountryAndISO/SelectCountryAndISOForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register-company" element={<RegisterCompanyForm />} />
          <Route path="/select-country-iso" element={<SelectCountryAndISOForm />} />
          <Route path="/" element={<RegisterCompanyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
