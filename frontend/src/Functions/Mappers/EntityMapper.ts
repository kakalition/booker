import AuthorEntity from '../../Types/Entities/AuthorEntity';
import BookEntity from '../../Types/Entities/BookEntity';
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

  export const book = (json: any) => {
    const entity: BookEntity = {
      id: json.id,
      isbn: json.isbn,
      title: json.title,
      author: json.author,
      publisher: json.publisher,
      published_at: json.published_at,
      total_copies_owned: json.total_copies_owned,
    };

    return entity;
  };
}

export default EntityMapper;
