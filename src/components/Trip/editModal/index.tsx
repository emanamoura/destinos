import { useDataContext } from "../../../context/DataContext";
import { Button } from "../../Button";
import { SelectForm } from "../../SelectForm";
import { UserForm } from "../../UserForm";
import './style.css';

interface EditModalProps {
    cpfUser: string;
    nameUser: string;
    closeModal: (close: boolean) => void;
}
export const EditModal = ({cpfUser , closeModal} : EditModalProps) => {
    const {
        name,
        email,
        telefone,
        selectedCity,
        dataIda,
        dataVolta,
        selectedCountry,
        editDestination
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
            editDestination(cpfUser, {
              name,
              cpf: cpfUser,
              dataIda,
              dataVolta,
              email,
              selectedCity,
              selectedCountry,
              telefone,
            });
          }
          closeModal(false)
        } catch (err) {
          console.log(err);
        }
      };
    return(
        <div className="edit-main"> 
        <div className="edit-containerForm">
        <h1 className="username">Olá,{cpfUser} ! Tem certeza que quer editar suas informações ?</h1>
          <div className="edit-form-content">
            <UserForm showInputCpf={false}/>
            <SelectForm />
          </div>
          <div className="edit-button-container">
            <Button title="editar viagem" handleClick={handleSubmit} />
            <Button title="Fechar modal" handleClick={() => closeModal(false)}/>
          </div>
        </div>
      </div>
    )
}

