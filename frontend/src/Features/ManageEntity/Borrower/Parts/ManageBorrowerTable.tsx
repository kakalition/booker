import {
  Badge, Button, Td, Th, Tr,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import BaseTableComponent from '../../../../Components/Table/BaseTableComponent';

type Params = {
  borrowersData: any[],
  openEditDialog: (id: number) => void,
  openDeleteDialog: (id: number) => void,
};

export default function ManageBorrowerTable(params: Params) {
  const { borrowersData, openEditDialog, openDeleteDialog } = params;

  const tbodyElements = useMemo(() => borrowersData?.map((element, index) => (
    <Tr key={element.id}>
      <Td>{index + 1}</Td>
      <Td>{element.visitor}</Td>
      <Td>{element.book}</Td>
      <Td>{element.end_date}</Td>
      <Td>{element.status === true ? <Badge colorScheme="green">Returned</Badge> : <Badge colorScheme="red">Borrowed</Badge>}</Td>
      <Td>{element.is_overdue.toString()}</Td>
      <Td>
        <Button colorScheme="green" variant="outline" mr="1rem" onClick={() => openEditDialog(element.id)}>Edit</Button>
        <Button colorScheme="red" variant="outline" onClick={() => openDeleteDialog(element.id)}>Delete</Button>
      </Td>
    </Tr>
  )), [borrowersData]);

  const theadElement = (
    <Tr>
      <Th w="5%">No</Th>
      <Th>Name</Th>
      <Th>Book</Th>
      <Th w="13%">End date</Th>
      <Th w="13%">Status</Th>
      <Th w="13%">Is overdue</Th>
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
