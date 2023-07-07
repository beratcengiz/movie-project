import axios from 'axios'
export const api = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });
export const api_key = import.meta.env.VITE_API_KEY;