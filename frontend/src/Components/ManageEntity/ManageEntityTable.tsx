import React from 'react';
import BaseTableComponent from '../Table/BaseTableComponent';

type Params = {
  entity: string,
  theadElement: React.ReactNode,
  tbodyElements: React.ReactNode,
};

export default function ManageAuthorTable(params: Params) {
  const { entity, theadElement, tbodyElements } = params;

  return (
    <BaseTableComponent
      entity={entity}
      theadElement={theadElement}
      tbodyElements={tbodyElements}
    />
  );
}
