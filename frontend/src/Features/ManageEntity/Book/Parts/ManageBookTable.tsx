import { Th, Tr } from '@chakra-ui/react';
import React from 'react';
import BaseTableComponent from '../../../../Components/Table/BaseTableComponent';

type Params = {
  tbodyElements: React.ReactNode,
};

export default function ManageBookTable(params: Params) {
  const { tbodyElements } = params;

  const theadElement = (
    <Tr>
      <Th w="5%">No</Th>
      <Th>ISBN</Th>
      <Th>Title</Th>
      <Th>Author</Th>
      <Th>Publisher</Th>
      <Th>Total Copies Owned</Th>
      <Th>Published At</Th>
      <Th w="10%">Actions</Th>
    </Tr>
  );

  return (
    <BaseTableComponent
      entity="book"
      theadElement={theadElement}
      tbodyElements={tbodyElements}
    />
  );
}
