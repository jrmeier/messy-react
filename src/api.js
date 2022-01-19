import axios from "axios";

const BASE_URL = "https://qa-registry-interview-api.regsvcs.theknot.com"

// makes it easier to inject autentication
export const apiGet = ({endpoint, params}) => axios.get(`${BASE_URL}${endpoint}`, {...params});

// adding custom parameters to the request is easy and clean
export const getProductsApi = () => apiGet({endpoint: "/products"});