import axios from 'axios';

namespace AuthorAPI {
  export const get = (params?: any) => axios
    .get('/api/authors', { params });

  export const singleGet = (id: number) => axios
    .get(`/api/authors/${id}`);

  export const post = (payload: any) => axios
    .post('/api/authors', payload);
}

export default AuthorAPI;
