import { Address } from "../../apiClient/ApiClient";

export interface ContextType {
    name: string ;
    setName: (data: string) => void;
    email: string ;
    setEmail: (data: string) => void;
    telefone: string ;
    setTelefone: (data: string) => void;
    cpf: string ;
    setCpf: (data: string) => void;
    cities: Address[] ;
    setCities: (data: Address[]) => void;
    countries: Address[] ;
    setCountries:  (data: Address[]) => void;
    selectedCity: string ;
    setSelectedCity: (data: string) => void;
    selectedCountry: string ;
    setSelectedCountry: (data: string) => void;
    addDestination: (object: Destination) => void;
    destinations: Destination[];
}


export interface Destination {
    name: string;
    email: string;
    telefone: string;
    cpf: string;
    selectedCity: string;
    selectedCountry: string;
}