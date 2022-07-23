import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';

export default function SearchbarComponent() {
  return (
    <InputGroup w="50%">
      <InputLeftElement pointerEvents="none">
        <SearchIcon className="h-6 w-6 stroke-gray-500" />
      </InputLeftElement>
      <Input
        id="query"
        name="query"
        type="text"
        placeholder="J.K. Rowling"
      />
    </InputGroup>
  );
}
