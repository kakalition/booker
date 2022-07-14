import { Button } from '@chakra-ui/react';
import { LibraryIcon } from '@heroicons/react/outline';
import React from 'react';
import BookerLogoWithText from '../Logo/BookerLogoWithText';

function SidebarHeaderItemComponent(props: any) {
  const { icon, content } = props;

  return (
    <div className="flex w-full flex-row">
      <div className="flex w-[30%] justify-end">
        {icon}
        <div className="w-4" />
      </div>
      <div className="flex w-[70%] flex-row">
        <div className="w-4" />
        {content}
      </div>
    </div>
  );
}

function SidebarItemComponent(props: any) {
  const { text, onClick } = props;

  return (
    <div className="flex w-full flex-row">
      <div className="w-[30%]" />
      <div className="w-[70%]">
        <Button
          justifyContent="start"
          width="100%"
          bg="transparent"
          className="font-roboto text-xl font-normal"
          fontWeight="normal"
          fontSize="lg"
        >
          {text}
        </Button>
      </div>
    </div>
  );
}

export default function SidebarComponent() {
  const libraryIcon = (<LibraryIcon className="h-8 w-8 stroke-gray-600" />);
  const dataHeader = (<p className="font-roboto pt-1 text-xl text-gray-600">Data</p>);

  return (
    <div className="flex h-full w-full flex-col border-r-2 border-r-gray-200 px-4 py-8">
      <BookerLogoWithText />
      <div className="h-16" />
      <div className="mb-6 flex w-full flex-col items-center gap-3">
        <SidebarHeaderItemComponent icon={libraryIcon} content={dataHeader} />
        <SidebarItemComponent text="Dashboard" />
        <SidebarItemComponent text="Book Stock Chart" />
        <SidebarItemComponent text="Visitor Chart" />
        <SidebarItemComponent text="Borrower Chart" />
      </div>
    </div>
  );
}
