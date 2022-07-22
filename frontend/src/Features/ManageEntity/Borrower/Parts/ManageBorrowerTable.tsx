import { Th, Tr } from '@chakra-ui/react';
import React from 'react';
import BaseTableComponent from '../../../../Components/Table/BaseTableComponent';

type Params = {
  tbodyElements: React.ReactNode,
};

export default function ManageBorrowerTable(params: Params) {
  const { tbodyElements } = params;

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
