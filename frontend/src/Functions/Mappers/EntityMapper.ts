import { AxiosResponse } from 'axios';
import AuthorEntity from '../../Types/Entities/AuthorEntity';

namespace EntityMapper {
  export const author = (response: AxiosResponse) => {
    const authorEntity: AuthorEntity = {
      name: response.data.name,
      birth_date: response.data.birth_date,
      total_books: response.data.total_books,
      total_copies_owned: response.data.total_copies_owned,
      currently_borrowed: response.data.currently_borrowed,
    };

    return authorEntity;
  };
}

export default EntityMapper;
