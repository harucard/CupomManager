const axios =window.axios;
const BASE_API_URL = 'http://localhost:8000/api'

export default{
  getAllCupoms: () =>
    axios.get(`${BASE_API_URL}/cupons`),
  getOneCupom: (id) =>
    axios.get(`${BASE_API_URL}/cupons/${id}/edit`),
  addCupom: (cupom) =>
    axios.post(`${BASE_API_URL}/cupons/`,cupom),
  updateCupom: (cupom,id) =>
    axios.put(`${BASE_API_URL}/cupons/${id}`,cupom),
  deleteCupom: (id) =>  
    axios.delete(`${BASE_API_URL}/cupons/${id}`),
  addSale: (sale) =>
    axios.post(`${BASE_API_URL}/sales/`,sale),
  getProduct: () =>
    axios.get(`${BASE_API_URL}/products`),
}