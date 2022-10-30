import { SelectForm } from "../../components/SelectForm";
import { UserForm } from "../../components/UserForm";
import { useDataContext } from "../../context/DataContext";

import { Header } from "../../components/Header";
import { WorldSection } from "../../components/WorldSection";
import "./styles.css";
import { Button } from "../../components/Button";
import { Trips } from "../../components/Trips";
export const Principal = () => {
  const {
    name,
    email,
    telefone,
    cpf,
    selectedCity,
    dataIda,
    dataVolta,
    selectedCountry,
    addDestination,
  } = useDataContext();
  const validate = () => {
    let valid = true;
    if(!name) {
      window.alert("Você deve informar um nome !")
      valid = !valid
      return valid;
    }
    if(!email) {
      window.alert("Você deve informar um email !")
      valid = !valid
      return valid;
    }
    if(!telefone) {
      window.alert("Você deve informar um telefone !")
      valid = !valid
      return valid;
    }
    if(!cpf) {
      window.alert("Você deve fornecer um CPF")
      return valid;
    }
    if(!selectedCity) {
      window.alert("Você deve selecionar uma cidade !")
      valid = !valid
      return valid;
    }
    if(!selectedCountry) {
      window.alert("Você deve selecionar um país !")
      valid = !valid
      return valid;
    }
    if(!dataIda) {
      window.alert("Você deve fornecer uma data de ida")
      valid = !valid
      return valid;
    }
    if(!dataVolta) {
      window.alert("Você deve deve fornecer uma data de volta")
      return valid;
    }
    return valid;
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
   
    try {
      if(validate()) {
        addDestination({
          name,
          cpf,
          dataIda,
          dataVolta,
          email,
          selectedCity,
          selectedCountry,
          telefone,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section>
      <Header />
      <WorldSection />
      <div className="main">
        <div className="containerForm">
          <div className="form-content">
            <UserForm />
            <SelectForm />
          </div>
          <div className="button-container">
            <Button title="salvar viagem" handleClick={handleSubmit} />
          </div>
          <div className="trips">
            <Trips />
          </div>
        </div>
      </div>
    </section>
  );
};
