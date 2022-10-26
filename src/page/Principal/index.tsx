import { SelectForm } from "../../components/SelectForm";
import { UserForm } from "../../components/UserForm";
import {  useDataContext } from "../../context/DataContext";

export const Principal = () => {
    const { name, email, telefone, cpf, selectedCity, selectedCountry, addDestination } = useDataContext();
    const handleSubmit = (event: any) => {
      event.preventDefault()
        try {
            addDestination({
                name,cpf,email,selectedCity,selectedCountry,telefone
            })
        } catch(err) {
            console.log(err)
        }
    }
    return (
          <section>
            <div  className="main" onSubmit={handleSubmit}>
              <div className='container'>
              <div className='personal'>
              <h2>Dados Pessoais</h2>
              <UserForm />
            </div>
            <div className='cities'>
              <h2>Destinos de Interesse</h2>
            <SelectForm />
              </div>
              </div>
            <button onClick={handleSubmit}>
              Guardar informações de destino
              </button>
            </div>
          </section>
    );
  }
  