import {
  Td, Tr,
} from '@chakra-ui/react';
import { curry } from 'ramda';
import RowActionsElement from '../../Components/Table/RowActionsElement';
import PublisherEntity from '../../Types/Entities/PublisherEntity';

namespace ManagePublisherMapper {
  const tableRow = (
    element: PublisherEntity,
    startIndex: number,
    index: number,
    onEditClick: (id: number) => void,
    onDeleteClick: (id: number) => void,
  ) => (
    <Tr key={element.id}>
      <Td>{startIndex + index + 1}</Td>
      <Td>{element.name}</Td>
      <Td>
        <RowActionsElement
          onEditClick={() => onEditClick(element.id)}
          onDeleteClick={() => onDeleteClick(element.id)}
        />
      </Td>
    </Tr>
  );

  export const curriedTableRow = curry(
    (startIndex: number, element: PublisherEntity, index: number) => (
      onEditClick: (id: number) => void,
      onDeleteClick: (id: number) => void,
    ) => tableRow(element, index, startIndex, onEditClick, onDeleteClick),
  );
}

export default ManagePublisherMapper;
