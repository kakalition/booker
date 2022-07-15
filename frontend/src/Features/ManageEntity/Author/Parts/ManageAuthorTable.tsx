import { Th, Tr } from '@chakra-ui/react';
import React from 'react';
import BaseTableComponent from '../../../../Components/Table/BaseTableComponent';

type Params = {
  tbodyElements: React.ReactNode,
};

export default function ManageAuthorTable(params: Params) {
  const { tbodyElements } = params;

  const theadElement = (
    <Tr>
      <Th w="30%">Name</Th>
      <Th w="20%%">Birth date</Th>
      <Th w="13%">Total books</Th>
      <Th w="13%">Total copies owned</Th>
      <Th w="13%">Currently borrowed</Th>
      <Th w="10%">Actions</Th>
    </Tr>
  );

  return (
    <BaseTableComponent
      entity="author"
      theadElement={theadElement}
      tbodyElements={tbodyElements}
    />
  );
}
