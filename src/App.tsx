import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterCompanyForm from './components/registercompany/RegisterCompanyForm';
import SelectCountryAndISOForm from './components/selectcountryandiso/SelectCountryAndISOForm';
import AssignCollaboratorForm from './components/assigncollaborator/AssignCollaboratorForm';
import RegisterBranchesForm from './components/registerbranches/RegisterBranchesForm';
import ManageAreasAndPositions from './components/manageareasandpositions/ManageAreasAndPositions';
import RegisterWorkerForm from './components/registerworker/RegisterWorkerForm'; // Importar el nuevo componente

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register-company" element={<RegisterCompanyForm />} />
          <Route path="/select-country-iso" element={<SelectCountryAndISOForm />} />
          <Route path="/assign-collaborator" element={<AssignCollaboratorForm />} />
          <Route path="/register-branches" element={<RegisterBranchesForm />} />
          <Route path="/manage-areas-positions" element={<ManageAreasAndPositions />} />
          <Route path="/register-worker" element={<RegisterWorkerForm />} /> {/* Nueva ruta para el formulario de trabajadores */}
          <Route path="/" element={<RegisterCompanyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
