import { AxiosInstance } from "axios";
import { api } from "./apiConfiguration"

export interface Address {
    code: string;
    name: string;
}

class ApiClient {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = api;
    }

    async getCountries() : Promise<Address[]> {
        const countries = await this.apiClient.get('/country').then(response => response.data.map((country : Address) => 
            ({code : country.code, name: country.name})
        ))
        return countries;

    }

    async getCities() : Promise<Address[]> {
        const city = await this.apiClient.get('/city').then(response => response.data.map((city : Address) => ({code: city.code, name: city.name})))
        return city;
    }
}

const client = new ApiClient();
export { client }