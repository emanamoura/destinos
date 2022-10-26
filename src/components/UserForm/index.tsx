import { useContext } from "react";
import { useDataContext } from "../../context/DataContext";
import './style.css';

export const UserForm = () => {
  const {setName, setEmail, setTelefone, setCpf } = useDataContext();
  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input placeholder="Ex: Emanuel Moura" name="name" onChange={e => setName(e.target.value)}/>
      <label htmlFor="email">Email</label>
      <input placeholder="Ex: emanuel.moura@ccc.ufcg.edu.br" name="email" onChange={e => setEmail(e.target.value)} />
      <label htmlFor="telefone">Telefone</label>
      <input placeholder="Ex: (83) 9 8164-1347" name="telefone" onChange={e => setTelefone(e.target.value)} />
      <label htmlFor="cpf">CPF</label>
      <input placeholder="Ex: 999.999.999-15" name="cpf" onChange={e => setCpf(e.target.value)} />
    </form>
  );
};
