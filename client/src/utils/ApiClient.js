import axios from "axios";
let instance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });
export default instance;
