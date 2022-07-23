import axios from 'axios';

namespace CheckInAPI {
  export const get = (params?: any) => axios
    .get('/api/check-ins', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/check-ins/${id}`);

  export const post = (payload: any) => axios
    .post('/api/check-ins', payload);

  export const edit = (id: number, payload: any) => axios
    .put(`/api/check-ins/${id}`, payload);

  export const destroy = (id: number) => axios
    .delete(`/api/check-ins/${id}`);
}

export default CheckInAPI;
