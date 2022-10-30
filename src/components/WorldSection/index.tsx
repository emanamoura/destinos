import World from "../../icons/undraw_connected_world_wuay.svg";
import "./style.css";

export const WorldSection = () => {
  return (
    <section className="world">
      <div>
        <p>meu diário de<br/>viagens<span>.</span></p>
        <img src={World} alt="Um representação do planeta terra" />
      </div>
    </section>
  );
};
