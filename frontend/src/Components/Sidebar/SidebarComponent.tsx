import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, IconButton,
} from '@chakra-ui/react';
import {
  LibraryIcon, ChartBarIcon, ClockIcon, LogoutIcon,
} from '@heroicons/react/outline';
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

function SingleSidebarItemComponent(props: any) {
  const { icon, text } = props;

  return (
    <Button
      justifyContent="start"
      width="100%"
      bg="transparent"
      fontFamily="Roboto"
      fontWeight="normal"
      fontSize="md"
      marginBottom="0.5rem"
    >
      <div className="flex w-full flex-row">
        <div className="flex w-[15%] justify-end">
          {icon}
          <div className="w-1" />
        </div>
        <div className="flex w-[85%] flex-row">
          <div className="w-3" />
          <p className="font-roboto text-lg text-gray-600">{text}</p>
        </div>
      </div>
    </Button>
  );
}

function AccountSidebarItemComponent() {
  return (
    <div className="flex w-full flex-row items-center justify-between border-t py-6 px-4">
      <div>
        <p className="font-roboto text-md text-gray-900">Kaka</p>
        <p className="font-roboto text-md text-gray-500">kakalition@mail.com</p>
      </div>
      <IconButton aria-label="logout icon" bgColor="transparent">
        <LogoutIcon className="h-8 w-8 stroke-gray-500" />
      </IconButton>
    </div>
  );
}

export default function SidebarComponent() {
  const libraryIcon = (<LibraryIcon className="h-6 w-6 stroke-gray-600" />);
  const chartIcon = (<ChartBarIcon className="h-6 w-6 stroke-gray-600" />);
  const clockIcon = (<ClockIcon className="h-6 w-6 stroke-gray-600" />);

  return (
    <div className="relative flex h-full w-full flex-col border-r-2 border-r-gray-200 px-2 py-8">
      <div className="mb-8">
        <BookerLogoWithText />
      </div>
      <SingleSidebarItemComponent icon={libraryIcon} text="Dasboard" />
      <SingleSidebarItemComponent icon={clockIcon} text="Check-in" />
      <Accordion allowToggle>
        <AccordionItem borderColor="white">
          <AccordionButton border="none" ring="none" outline="none" outlineColor="white">
            <SidebarHeaderItemComponent icon={chartIcon} text="Data" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <SidebarItemComponent text="Book Stock Chart" />
            <SidebarItemComponent text="Visitor Chart" />
            <SidebarItemComponent text="Borrower Chart" />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderColor="white">
          <AccordionButton border="none" ring="none" outline="none" outlineColor="white">
            <SidebarHeaderItemComponent icon={libraryIcon} text="Manage Entity" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <SidebarItemComponent text="Author" />
            <SidebarItemComponent text="Publisher" />
            <SidebarItemComponent text="Book" />
            <SidebarItemComponent text="Shelf" />
            <SidebarItemComponent text="Borrower Data" />
            <SidebarItemComponent text="Visitor" />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderColor="white">
          <AccordionButton border="none" ring="none" outline="none" outlineColor="white">
            <SidebarHeaderItemComponent icon={clockIcon} text="History" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <SidebarItemComponent text="Recent Activities" />
            <SidebarItemComponent text="Check-in" />
            <SidebarItemComponent text="Borrower" />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <div className="absolute inset-x-0 bottom-0">
        <AccountSidebarItemComponent />
      </div>
    </div>
  );
}
