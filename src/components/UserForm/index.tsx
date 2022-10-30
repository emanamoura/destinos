import { useDataContext } from "../../context/DataContext";
import "./style.css";

interface UserFormProps {
  showInputCpf?: boolean;
}

export const UserForm = ({ showInputCpf = true }: UserFormProps) => {
  const { setName, setEmail, setTelefone, setCpf } = useDataContext();
  return (
    <form className="form">
      <h2>dados Pessoais</h2>
      <label htmlFor="name">nome</label>
      <input
        placeholder="Ex: Emanuel Moura"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">email</label>
      <input
        placeholder="Ex: emanuel.moura@ccc.ufcg.edu.br"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="telefone">telefone</label>
      <input
        placeholder="Ex: (83) 9 8164-1347"
        name="telefone"
        onChange={(e) => setTelefone(e.target.value)}
      />
      {showInputCpf && (
        <>
          <label htmlFor="cpf">cpf</label>
          <input
            placeholder="Ex: 999.999.999-15"
            name="cpf"
            onChange={(e) => setCpf(e.target.value)}
          />
        </>
      )}
    </form>
  );
};
