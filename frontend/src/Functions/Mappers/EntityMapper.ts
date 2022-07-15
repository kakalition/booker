import AuthorEntity from '../../Types/Entities/AuthorEntity';

namespace EntityMapper {
  export const author = (json: any) => {
    const authorEntity: AuthorEntity = {
      name: json.name,
      birth_date: json.birth_date,
      total_books: json.total_books,
      total_copies_owned: json.total_copies_owned,
      currently_borrowed: json.currently_borrowed,
    };

    return authorEntity;
  };
}

export default EntityMapper;
