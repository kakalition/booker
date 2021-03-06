import {
  Td, Tr,
} from '@chakra-ui/react';
import { curry } from 'ramda';
import RowActionsElement from '../../Components/Table/RowActionsElement';
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
        <RowActionsElement
          onEditClick={() => onEditClick(element.id)}
          onDeleteClick={() => onDeleteClick(element.id)}
        />
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
