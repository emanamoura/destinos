import { useDataContext } from "../../context/DataContext"
import { Empty } from "../empty";
import { Trip } from "../Trip";
import './style.css';

export const Trips = () => {
    const { destinations } = useDataContext();
    return(
        <section className="box">
            <h2 className="text-trip-box">Destinos cadastrados</h2>
            <div className="trips-container">
            {destinations.length > 0 ? destinations.map(destination => <Trip destination={destination}/>) : null} 
            </div>
            {destinations.length === 0 && <Empty/>}
        </section>
    )
}