import axios from 'axios';

namespace BorrowerAPI {
  export const get = (params?: any) => axios
    .get('/api/borrowers', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/borrowers/${id}`);

  export const post = (payload: any) => axios
    .post('/api/borrowers', payload);

  export const edit = (id: number, payload: any) => axios
    .put(`/api/borrowers/${id}`, payload);

  export const destroy = (id: number) => axios
    .delete(`/api/borrowers/${id}`);
}

export default BorrowerAPI;
