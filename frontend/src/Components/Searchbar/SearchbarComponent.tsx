import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';

type Params = {
  onChange: (value: string) => void,
  onSubmit: (values: any) => void
};

export default function SearchbarComponent(params: Params) {
  const { onChange } = params;

  return (
    <form className="w-1/2">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon className="h-6 w-6 stroke-gray-500" />
        </InputLeftElement>
        <Input
          id="query"
          name="query"
          type="text"
          placeholder="J.K. Rowling"
          onChange={(event) => onChange(event.target.value)}
        />
      </InputGroup>
    </form>
  );
}
