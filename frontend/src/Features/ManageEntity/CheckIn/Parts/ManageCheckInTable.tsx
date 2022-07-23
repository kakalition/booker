import {
  Badge, Button, Td, Th, Tr,
} from '@chakra-ui/react';
import moment from 'moment';
import { useMemo } from 'react';
import BaseTableComponent from '../../../../Components/Table/BaseTableComponent';

type Params = {
  checkInData: any[],
  openEditDialog: (id: number) => void,
  openDeleteDialog: (id: number) => void,
};

export default function ManageCheckInTable(params: Params) {
  const { checkInData, openEditDialog, openDeleteDialog } = params;

  const tbodyElements = useMemo(() => checkInData?.map((element, index) => (
    <Tr key={element.id}>
      <Td>{index + 1}</Td>
      <Td>{element.visitor}</Td>
      <Td>{moment(element.created_at).format('hh:mm A')}</Td>
      <Td>{element.checked_out_at === null ? <Badge colorScheme="green">Checked In</Badge> : <Badge colorScheme="red">Checked Out</Badge> }</Td>
      <Td>
        {
        element.checked_out_at === null
          ? <Button colorScheme="green" variant="outline" mr="1rem" onClick={() => null}>Mark Checked Out</Button>
          : <p>{`Checked out at: ${moment(element.created_at).fromNow()}`}</p>
        }
      </Td>
    </Tr>
  )), [checkInData]);

  const theadElement = (
    <Tr>
      <Th w="5%">No</Th>
      <Th w="50%">Name</Th>
      <Th w="10%">Checked In At</Th>
      <Th w="10%">Status</Th>
      <Th w="25%%">Action</Th>
    </Tr>
  );

  return (
    <BaseTableComponent
      entity="borrower"
      theadElement={theadElement}
      tbodyElements={tbodyElements}
    />
  );
}
