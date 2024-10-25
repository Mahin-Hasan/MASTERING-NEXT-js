// export const getServices = async () => {
//   const res = await fetch(`http://localhost:3000/services/api/get-all`);
//   const services = res.json();
//   return services;
// };

import axios from "axios";

//use axios method if encountered error
export const getServices = async () => {
  const res = await axios.get(`http://localhost:3000/services/api/get-all`);
  return res.data;
};
export const getServiceDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`);
  const service = res.json();
  return service;
};
