import axios from 'axios';

namespace AuthorAPI {
  export const get = (params?: any) => axios
    .get('/api/authors', { params });
}

export default AuthorAPI;
