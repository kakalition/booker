import IntBiFunction from '../Interfaces/IntBiFunction';

namespace EntitySorter {
  export const byName: IntBiFunction<any> = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };
}

export default EntitySorter;
