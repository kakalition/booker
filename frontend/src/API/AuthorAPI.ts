import axios from 'axios';

namespace AuthorAPI {
  export const get = (params?: any) => axios
    .get('/api/authors', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/authors/${id}`);

  export const post = (payload: any) => axios
    .post('/api/authors', payload);

  export const edit = (id: number, payload: any) => axios
    .put(`/api/authors/${id}`, payload);

  export const destroy = (id: number) => axios
    .delete(`/api/authors/${id}`);
}

export default AuthorAPI;
