import axios from 'axios';

namespace PublisherAPI {
  export const get = (params?: any) => axios
    .get('/api/publishers', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/publishers/${id}`);

  export const post = (payload: any) => axios
    .post('/api/publishers', payload);

  export const edit = (id: number, payload: any) => axios
    .put(`/api/publishers/${id}`, payload);

  export const destroy = (id: number) => axios
    .delete(`/api/publishers/${id}`);
}

export default PublisherAPI;
