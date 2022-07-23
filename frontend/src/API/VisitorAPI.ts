import axios from 'axios';

namespace VisitorAPI {
  export const get = (params?: any) => axios
    .get('/api/visitors', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/visitors/${id}`);

  export const post = (payload: any) => axios
    .post('/api/visitors', payload);

  export const edit = (id: number, payload: any) => axios
    .put(`/api/visitors/${id}`, payload);

  export const destroy = (id: number) => axios
    .delete(`/api/visitors/${id}`);
}

export default VisitorAPI;
