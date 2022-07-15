import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@heroicons/react/outline';
import { useFormik } from 'formik';

type Params = {
  onSubmit: (values: any) => void
};

export default function SearchbarComponent(params: Params) {
  const { onSubmit } = params;

  const formik = useFormik({
    initialValues: {
      query: '',
    },
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-1/2">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon className="h-6 w-6 stroke-gray-500" />
        </InputLeftElement>
        <Input
          id="query"
          name="query"
          type="text"
          placeholder="J.K. Rowling"
          onChange={formik.handleChange}
          value={formik.values.query}
        />
      </InputGroup>
    </form>
  );
}
