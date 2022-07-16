import { Th, Tr } from '@chakra-ui/react';
import React from 'react';
import BaseTableComponent from '../../../../Components/Table/BaseTableComponent';

type Params = {
  tbodyElements: React.ReactNode,
};

export default function ManagePublisherTable(params: Params) {
  const { tbodyElements } = params;

  const theadElement = (
    <Tr>
      <Th w="5%">No</Th>
      <Th w="85%">Name</Th>
      <Th w="10%">Actions</Th>
    </Tr>
  );

  return (
    <BaseTableComponent
      entity="publisher"
      theadElement={theadElement}
      tbodyElements={tbodyElements}
    />
  );
}
