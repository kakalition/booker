import axios from 'axios';

namespace BookAPI {
  export const get = (params?: any) => axios
    .get('/api/books', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/books/${id}`);

  export const post = (payload: any) => axios
    .post('/api/books', payload);

  export const edit = (id: number, payload: any) => axios
    .put(`/api/books/${id}`, payload);

  export const destroy = (id: number) => axios
    .delete(`/api/books/${id}`);
}

export default BookAPI;
