import {  useDataContext } from "../../context/DataContext";
import './style.css';

export const SelectForm = () => {
   const { selectedCity , setSelectedCity, cities, selectedCountry, setSelectedCountry, countries} = useDataContext();
  return (
    <div className="form-select">
       <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} placeholder="Adicione a cidade de destino">
        <option value={""}>Escolha uma cidade</option>
        {cities?.map(city => (
          <option key={city.code} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} placeholder="Adicione o país de destino">
      <option value={""}>Escolha uma país</option>
        {countries?.map(country => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};
