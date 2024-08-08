import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/public/Frame.svg';
import mx from '/public/flags/mx.svg';
import './SelectCountryAndISOForm.css';

const SelectCountryAndISOForm = () => {
  const [selectedCountry, setSelectedCountry] = useState('pe');
  const [selectedISO, setSelectedISO] = useState('');

 
    const countries = [
        { name: 'Afghanistan', code: 'af' },
        { name: 'Albania', code: 'al' },
        { name: 'Algeria', code: 'dz' },
        { name: 'Andorra', code: 'ad' },
        { name: 'Angola', code: 'ao' },
        { name: 'Argentina', code: 'ar' },
        { name: 'Armenia', code: 'am' },
        { name: 'Australia', code: 'au' },
        { name: 'Austria', code: 'at' },
        { name: 'Azerbaijan', code: 'az' },
        { name: 'Bahamas', code: 'bs' },
        { name: 'Bahrain', code: 'bh' },
        { name: 'Bangladesh', code: 'bd' },
        { name: 'Barbados', code: 'bb' },
        { name: 'Belarus', code: 'by' },
        { name: 'Belgium', code: 'be' },
        { name: 'Belize', code: 'bz' },
        { name: 'Benin', code: 'bj' },
        { name: 'Bhutan', code: 'bt' },
        { name: 'Bolivia', code: 'bo' },
        { name: 'Bosnia and Herzegovina', code: 'ba' },
        { name: 'Botswana', code: 'bw' },
        { name: 'Brazil', code: 'br' },
        { name: 'Brunei', code: 'bn' },
        { name: 'Bulgaria', code: 'bg' },
        { name: 'Burkina Faso', code: 'bf' },
        { name: 'Burundi', code: 'bi' },
        { name: 'Cambodia', code: 'kh' },
        { name: 'Cameroon', code: 'cm' },
        { name: 'Canada', code: 'ca' },
        { name: 'Cape Verde', code: 'cv' },
        { name: 'Central African Republic', code: 'cf' },
        { name: 'Chad', code: 'td' },
        { name: 'Chile', code: 'cl' },
        { name: 'China', code: 'cn' },
        { name: 'Colombia', code: 'co' },
        { name: 'Comoros', code: 'km' },
        { name: 'Congo (Brazzaville)', code: 'cg' },
        { name: 'Congo (Kinshasa)', code: 'cd' },
        { name: 'Costa Rica', code: 'cr' },
        { name: 'Croatia', code: 'hr' },
        { name: 'Cuba', code: 'cu' },
        { name: 'Cyprus', code: 'cy' },
        { name: 'Czech Republic', code: 'cz' },
        { name: 'Denmark', code: 'dk' },
        { name: 'Djibouti', code: 'dj' },
        { name: 'Dominica', code: 'dm' },
        { name: 'Dominican Republic', code: 'do' },
        { name: 'Ecuador', code: 'ec' },
        { name: 'Egypt', code: 'eg' },
        { name: 'El Salvador', code: 'sv' },
        { name: 'Equatorial Guinea', code: 'gq' },
        { name: 'Eritrea', code: 'er' },
        { name: 'Estonia', code: 'ee' },
        { name: 'Eswatini', code: 'sz' },
        { name: 'Ethiopia', code: 'et' },
        { name: 'Fiji', code: 'fj' },
        { name: 'Finland', code: 'fi' },
        { name: 'France', code: 'fr' },
        { name: 'Gabon', code: 'ga' },
        { name: 'Gambia', code: 'gm' },
        { name: 'Georgia', code: 'ge' },
        { name: 'Germany', code: 'de' },
        { name: 'Ghana', code: 'gh' },
        { name: 'Greece', code: 'gr' },
        { name: 'Grenada', code: 'gd' },
        { name: 'Guatemala', code: 'gt' },
        { name: 'Guinea', code: 'gn' },
        { name: 'Guinea-Bissau', code: 'gw' },
        { name: 'Guyana', code: 'gy' },
        { name: 'Haiti', code: 'ht' },
        { name: 'Honduras', code: 'hn' },
        { name: 'Hungary', code: 'hu' },
        { name: 'Iceland', code: 'is' },
        { name: 'India', code: 'in' },
        { name: 'Indonesia', code: 'id' },
        { name: 'Iran', code: 'ir' },
        { name: 'Iraq', code: 'iq' },
        { name: 'Ireland', code: 'ie' },
        { name: 'Israel', code: 'il' },
        { name: 'Italy', code: 'it' },
        { name: 'Jamaica', code: 'jm' },
        { name: 'Japan', code: 'jp' },
        { name: 'Jordan', code: 'jo' },
        { name: 'Kazakhstan', code: 'kz' },
        { name: 'Kenya', code: 'ke' },
        { name: 'Kiribati', code: 'ki' },
        { name: 'Korea (North)', code: 'kp' },
        { name: 'Korea (South)', code: 'kr' },
        { name: 'Kuwait', code: 'kw' },
        { name: 'Kyrgyzstan', code: 'kg' },
        { name: 'Laos', code: 'la' },
        { name: 'Latvia', code: 'lv' },
        { name: 'Lebanon', code: 'lb' },
        { name: 'Lesotho', code: 'ls' },
        { name: 'Liberia', code: 'lr' },
        { name: 'Libya', code: 'ly' },
        { name: 'Liechtenstein', code: 'li' },
        { name: 'Lithuania', code: 'lt' },
        { name: 'Luxembourg', code: 'lu' },
        { name: 'Madagascar', code: 'mg' },
        { name: 'Malawi', code: 'mw' },
        { name: 'Malaysia', code: 'my' },
        { name: 'Maldives', code: 'mv' },
        { name: 'Mali', code: 'ml' },
        { name: 'Malta', code: 'mt' },
        { name: 'Marshall Islands', code: 'mh' },
        { name: 'Mauritania', code: 'mr' },
        { name: 'Mauritius', code: 'mu' },
        { name: 'Mexico', code: 'mx' },
        { name: 'Micronesia', code: 'fm' },
        { name: 'Moldova', code: 'md' },
        { name: 'Monaco', code: 'mc' },
        { name: 'Mongolia', code: 'mn' },
        { name: 'Montenegro', code: 'me' },
        { name: 'Morocco', code: 'ma' },
        { name: 'Mozambique', code: 'mz' },
        { name: 'Myanmar', code: 'mm' },
        { name: 'Namibia', code: 'na' },
        { name: 'Nauru', code: 'nr' },
        { name: 'Nepal', code: 'np' },
        { name: 'Netherlands', code: 'nl' },
        { name: 'New Zealand', code: 'nz' },
        { name: 'Nicaragua', code: 'ni' },
        { name: 'Niger', code: 'ne' },
        { name: 'Nigeria', code: 'ng' },
        { name: 'North Macedonia', code: 'mk' },
        { name: 'Norway', code: 'no' },
        { name: 'Oman', code: 'om' },
        { name: 'Pakistan', code: 'pk' },
        { name: 'Palau', code: 'pw' },
        { name: 'Palestine', code: 'ps' },
        { name: 'Panama', code: 'pa' },
        { name: 'Papua New Guinea', code: 'pg' },
        { name: 'Paraguay', code: 'py' },
        { name: 'Peru', code: 'pe' },
        { name: 'Philippines', code: 'ph' },
        { name: 'Poland', code: 'pl' },
        { name: 'Portugal', code: 'pt' },
        { name: 'Qatar', code: 'qa' },
        { name: 'Romania', code: 'ro' },
        { name: 'Russia', code: 'ru' },
  ];

  const isos = [
    "ISO 50001", "ISO 45001", "ISO 14001", "ISO 9001",
    "ISO 20000", "ISO 55001", "ISO 21001", "ISO 27001",
    "ISO 22000", "ISO 13485", "ISO 31000", "ISO 26000",
    "ISO 37001", "ISO 19011", "ISO 22301", "ISO 28000",
    "ISO 20121", "ISO 4217", "ISO 8601", "ISO 17025"
  ];

  return (
    <div className="container">
      <div className="card-body text-start">
        <div className="d-flex align-items-center mb-4">
          <div className="logo"><img src={logo} alt="Company Logo" /></div>
        </div>
        <h5 className="step-title">Paso 1: Seleccione su País e ISO</h5>
        <p>Para comenzar, por favor seleccione su país de origen y las normas ISO que desea adquirir...</p>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">Seleccione su País *</label>
          <select
            className="form-select"
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
           {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      <img
                        src={mx}
                        alt={`${country.name} flag`}
                        className="flag"
                      />
                      {country.name}
                    </option>
                  ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Seleccione los ISO *</label>
          <div className="iso-list">
            {isos.map((iso, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="iso"
                  id={iso}
                  value={iso}
                  checked={selectedISO === iso}
                  onChange={(e) => setSelectedISO(e.target.value)}
                />
                <label className="form-check-label" htmlFor={iso}>{iso}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary">Cancelar</button>
          <button type="button" className="btn btn-primary">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default SelectCountryAndISOForm;
