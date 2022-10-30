import {  useDataContext } from "../../context/DataContext";
import './style.css';

export const SelectForm = () => {
   const { selectedCity , setSelectedCity, cities, selectedCountry, setSelectedCountry, countries, setDataIda, setDataVolta} = useDataContext();
  return (
    <div className="form-select">
      <h2>destino de interesse</h2>
      <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} placeholder="Adicione o país de destino">
      <option value={""}>selecione o país</option>
        {countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
     
      <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} placeholder="Adicione a cidade de destino">
        <option value={""}>selecione a cidade</option>
        {cities?.map(city => (
          <option key={city.code} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
      <label htmlFor="ida">data prevista para ida</label>
      <input placeholder="__/__/__" name="ida" onChange={e => setDataIda(e.target.value)}/>
      <label htmlFor="volta">data prevista para volta</label>
      <input placeholder="__/__/__" name="volta" onChange={e => setDataVolta(e.target.value)}/>
    </div>
  );
};
