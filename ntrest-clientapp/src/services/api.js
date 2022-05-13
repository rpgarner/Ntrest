import Axios from "axios"

export const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://ntrest-api.herokuapp.com' : 'http://localhost:3000';

const Client = Axios.create({ baseURL: BASE_URL });

// Client.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem("token");
//       console.log(token)
//       if (token) {
//         config.headers["authorization"] = `Bearer ${token}`;
//       }
//       return config; 
//     },
//     (error) => Promise.reject(error)
//   );
  
  export default Client;