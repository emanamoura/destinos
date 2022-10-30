import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Address, client } from "../apiClient/ApiClient";
import { ContextType, Destination } from "./@types/ContextType";

interface DataProps {
  children: JSX.Element;
}

const DataContext = React.createContext<ContextType>({} as ContextType);

const DataContextProvider = ({ children }: DataProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [dataIda, setDataIda] = useState("");
  const [dataVolta, setDataVolta] = useState("");
  const [cities, setCities] = useState<Address[]>([] as Address[]);
  const [countries, setCountries] = useState<Address[]>([] as Address[]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [destinations, setDestinations] = useState<Destination[]>(
    [] as Destination[]
  );

  const fetchCities = useCallback(async () => {
    const cities = await client.getCities();
    console.log(cities)
    console.log(selectedCountry)
    const selectedCities = cities.filter(city => city.country_code === selectedCountry)
    console.log(selectedCities)
    setCities([...selectedCities]);
  }, [selectedCountry]);

  const fetchCountries = useCallback(async () => {
    const countriesfetched = await client.getCountries();
    setCountries([...countriesfetched]);
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  

  const addDestination = useCallback(
    (object: Destination) => {
      const alreadyExists = destinations.find(destination => object.cpf === destination.cpf)
      if(alreadyExists) {
        window.alert("Já foi cadastrado !")
        return;
      } else {
        setDestinations([...destinations, object]);
      }
    },
    [destinations]
  );

  const deleteDestination = useCallback(
    (cpf: string )=> {
      const newDestinations = destinations.filter(destination => destination.cpf !== cpf)
      setDestinations(newDestinations)
    },[destinations]
  )

  const editDestination = useCallback((cpf: string, object: Destination) => {
    const newDestination = destinations.map((destination) => {
      if(destination.cpf === cpf) {
        return object;
      } else {
        return destination;
      }
    } )
    if(newDestination) {
      setDestinations(newDestination)
    }
    
  }, [destinations])

  const contextValue = useMemo(
    () => ({
      name,
      setName,
      email,
      setEmail,
      telefone,
      setTelefone,
      cpf,
      setCpf,
      cities,
      setCities,
      countries,
      setCountries,
      selectedCity,
      setSelectedCity,
      selectedCountry,
      setSelectedCountry,
      destinations,
      addDestination,
      deleteDestination,
      editDestination,
      dataIda,
      setDataIda,
      dataVolta,
      setDataVolta
    }),
    [
      name,
      setName,
      email,
      setEmail,
      telefone,
      setTelefone,
      cpf,
      setCpf,
      cities,
      setCities,
      countries,
      setCountries,
      selectedCity,
      setSelectedCity,
      selectedCountry,
      setSelectedCountry,
      destinations,
      addDestination,
      deleteDestination,
      editDestination,
      dataIda,
      setDataIda,
      dataVolta,
      setDataVolta
    ]
  );
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }
  return context;
};

export { useDataContext, DataContextProvider };
