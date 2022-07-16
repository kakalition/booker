import AuthorEntity from '../../Types/Entities/AuthorEntity';
import PublisherEntity from '../../Types/Entities/PublisherEntity';

namespace EntityMapper {
  export const author = (json: any) => {
    const authorEntity: AuthorEntity = {
      id: json.id,
      name: json.name,
      birth_date: json.birth_date,
      total_books: json.total_books,
      total_copies_owned: json.total_copies_owned,
      currently_borrowed: json.currently_borrowed,
    };

    return authorEntity;
  };

  export const publisher = (json: any) => {
    const entity: PublisherEntity = {
      id: json.id,
      name: json.name,
    };

    return entity;
  };
}

export default EntityMapper;
