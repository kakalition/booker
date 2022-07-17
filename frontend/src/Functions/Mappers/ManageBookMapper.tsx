import {
  Td, Tr,
} from '@chakra-ui/react';
import { curry } from 'ramda';
import RowActionsElement from '../../Components/Table/RowActionsElement';
import BookEntity from '../../Types/Entities/BookEntity';

namespace ManageBookMapper {
  const tableRow = (
    element: BookEntity,
    startIndex: number,
    index: number,
    onEditClick: (id: number) => void,
    onDeleteClick: (id: number) => void,
  ) => (
    <Tr key={element.id}>
      <Td>{startIndex + index + 1}</Td>
      <Td>{element.isbn}</Td>
      <Td>{element.title}</Td>
      <Td>{element.author}</Td>
      <Td>{element.publisher}</Td>
      <Td>{element.total_copies_owned}</Td>
      <Td>{element.published_at}</Td>
      <Td>
        <RowActionsElement
          onEditClick={() => onEditClick(element.id)}
          onDeleteClick={() => onDeleteClick(element.id)}
        />
      </Td>
    </Tr>
  );

  export const curriedTableRow = curry(
    (startIndex: number, element: BookEntity, index: number) => (
      onEditClick: (id: number) => void,
      onDeleteClick: (id: number) => void,
    ) => tableRow(element, index, startIndex, onEditClick, onDeleteClick),
  );
}

export default ManageBookMapper;
