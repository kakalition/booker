import {
  Table, TableContainer, Tbody, Thead,
} from '@chakra-ui/react';
import React from 'react';

type Params = {
  entity: string,
  theadElement: React.ReactNode,
  tbodyElements: React.ReactNode,
};

export default function BaseTableComponent(params: Params) {
  const { entity, theadElement, tbodyElements } = params;

  return (
    <>
      <p className="font-roboto mb-4 text-gray-500">{`0 ${entity} selected from 24 ${entity}s found.`}</p>
      <TableContainer border="1px" borderColor="gray.200" rounded="xl" marginBottom="2rem">
        <Table variant="striped">
          <Thead>
            {theadElement}
          </Thead>
          <Tbody>
            {tbodyElements}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
