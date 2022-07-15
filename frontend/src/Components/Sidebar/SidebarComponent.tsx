import { Button } from '@chakra-ui/react';
import { LibraryIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/outline';
import BookerLogoWithText from '../Logo/BookerLogoWithText';

function SidebarHeaderItemComponent(props: any) {
  const { icon, text } = props;

  return (
    <div className="flex w-full flex-row">
      <div className="flex w-[15%] justify-end">
        {icon}
      </div>
      <div className="flex w-[85%] flex-row">
        <div className="w-4" />
        <p className="font-roboto text-lg text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function SidebarItemComponent(props: any) {
  const { text, onClick } = props;

  return (
    <div className="flex w-full flex-row">
      <div className="w-[15%]" />
      <div className="w-[85%]">
        <Button
          justifyContent="start"
          width="100%"
          bg="transparent"
          fontFamily="Roboto"
          fontWeight="normal"
          fontSize="md"
        >
          {text}
        </Button>
      </div>
    </div>
  );
}

export default function SidebarComponent() {
  const libraryIcon = (<LibraryIcon className="h-6 w-6 stroke-gray-600" />);
  const chartIcon = (<ChartBarIcon className="h-6 w-6 stroke-gray-600" />);
  const clockIcon = (<ClockIcon className="h-6 w-6 stroke-gray-600" />);

  return (
    <div className="flex h-full w-full flex-col border-r-2 border-r-gray-200 px-2 py-8">
      <BookerLogoWithText />
      <div className="h-20" />
      <div className="mb-6 flex w-full flex-col items-center gap-2">
        <SidebarHeaderItemComponent icon={chartIcon} text="Data" />
        <SidebarItemComponent text="Dashboard" />
        <SidebarItemComponent text="Book Stock Chart" />
        <SidebarItemComponent text="Visitor Chart" />
        <SidebarItemComponent text="Borrower Chart" />
      </div>
      <div className="mb-6 flex w-full flex-col items-center gap-2">
        <SidebarHeaderItemComponent icon={libraryIcon} text="Manage Entity" />
        <SidebarItemComponent text="Author" />
        <SidebarItemComponent text="Publisher" />
        <SidebarItemComponent text="Book" />
        <SidebarItemComponent text="Shelf" />
        <SidebarItemComponent text="Borrower Data" />
        <SidebarItemComponent text="Visitor" />
        <SidebarItemComponent text="Check-in" />
      </div>
      <div className="mb-6 flex w-full flex-col items-center gap-2">
        <SidebarHeaderItemComponent icon={clockIcon} text="History" />
        <SidebarItemComponent text="Recent Activities" />
        <SidebarItemComponent text="Check-in" />
        <SidebarItemComponent text="Borrower" />
      </div>
    </div>
  );
}
