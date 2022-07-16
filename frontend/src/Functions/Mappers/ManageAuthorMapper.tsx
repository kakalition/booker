import {
  Checkbox, IconButton, Td, Tr,
} from '@chakra-ui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { curry } from 'ramda';
import AuthorEntity from '../../Types/Entities/AuthorEntity';

namespace ManageAuthorMapper {
  const tableRow = (
    element: AuthorEntity,
    startIndex: number,
    index: number,
    onEditClick: (id: number) => void,
    onDeleteClick: (id: number) => void,
  ) => (
    <Tr key={element.id}>
      <Td>{startIndex + index + 1}</Td>
      <Td>{element.name}</Td>
      <Td>{element.birth_date}</Td>
      <Td>{element.total_books}</Td>
      <Td>{element.total_copies_owned}</Td>
      <Td>{element.currently_borrowed}</Td>
      <Td>
        <div className="flex flex-row items-center gap-6">
          <IconButton bgColor="transparent" aria-label="edit author" onClick={() => onEditClick(element.id)}>
            <PencilIcon className="h-6 w-6 stroke-gray-500" />
          </IconButton>
          <IconButton bgColor="transparent" aria-label="delete author" onClick={() => onDeleteClick(element.id)}>
            <TrashIcon className="h-6 w-6 stroke-gray-500" />
          </IconButton>
          <Checkbox size="lg" />
        </div>
      </Td>
    </Tr>
  );

  export const curriedTableRow = curry(
    (startIndex: number, element: AuthorEntity, index: number) => (
      onEditClick: (id: number) => void,
      onDeleteClick: (id: number) => void,
    ) => tableRow(element, index, startIndex, onEditClick, onDeleteClick),
  );
}

export default ManageAuthorMapper;
