import AuthorEntity from '../../Types/Entities/AuthorEntity';
import IntBiFunction from '../Interfaces/IntBiFunction';

namespace AuthorSorter {
  export const byName: IntBiFunction<AuthorEntity> = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  export const byBirthDate: IntBiFunction<AuthorEntity> = (a, b) => {
    const aDate = new Date(a.birth_date);
    const bDate = new Date(b.birth_date);

    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;
    return 0;
  };
}

export default AuthorSorter;
