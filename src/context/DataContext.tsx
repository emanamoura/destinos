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
  const [cities, setCities] = useState<Address[]>([] as Address[]);
  const [countries, setCountries] = useState<Address[]>([] as Address[]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [destinations, setDestinations] = useState<Destination[]>(
    [] as Destination[]
  );

  const fetchCities = useCallback(async () => {
    const cities = await client.getCities();
    setCities([...cities]);
  }, []);

  const fetchCountries = useCallback(async () => {
    const countries = await client.getCountries();
    setCountries([...countries]);
  }, []);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const addDestination = useCallback(
    (object: Destination) => {
      setDestinations([...destinations, object]);
    },
    [destinations]
  );

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
