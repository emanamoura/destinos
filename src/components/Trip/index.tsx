import { useState } from "react";
import { Destination } from "../../context/@types/ContextType";
import { useDataContext } from "../../context/DataContext";
import { Button } from "../Button";
import { EditModal } from "./editModal";
import './style.css';
interface TripProps {
  destination: Destination;
}

export const Trip = ({ destination }: TripProps) => {
  const { deleteDestination, editDestination } = useDataContext();
    const [showEdit, setShowEdit] = useState(false);
  return (
    <section className="trip-container">
      <h2 className="city">{destination.selectedCity}</h2>
      <p className="country">{destination.selectedCountry}</p>
      <div className="dates">
        <p>{destination.dataIda}</p>
        <p>{destination.dataVolta}</p>
      </div>
      <div className="trip-text">
        <p>{destination.name}</p>
        <p>{destination.email}</p>
        <p>{destination.telefone}</p>
        <p>{destination.cpf}</p>
      </div>
      <div className="trip-buttons">
        <Button handleClick={() => setShowEdit(true)} title="Editar" />
        <Button handleClick={() => deleteDestination(destination.cpf)} title="Excluir"/>
      </div>
      {showEdit && <EditModal cpfUser={destination.cpf} nameUser={destination.name} closeModal={setShowEdit} />}
    </section>
  );
};
