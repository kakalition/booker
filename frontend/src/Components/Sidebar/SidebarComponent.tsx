import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
} from '@chakra-ui/react';
import {
  LibraryIcon, ChartBarIcon, ClockIcon,
} from '@heroicons/react/outline';
import BookerLogoWithText from '../Logo/BookerLogoWithText';
import AccountSidebarItemComponent from './Parts/AccountSidebarItemComponent';
import SidebarHeaderItemComponent from './Parts/SidebarHeaderItemComponent';
import SidebarItemComponent from './Parts/SidebarItemComponent';
import SingleSidebarItemComponent from './Parts/SingleSidebarItemComponent';

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
        <AccordionItem borderColor="white" mb="1rem">
          <AccordionButton border="none" ring="none" outline="none" outlineColor="white">
            <SidebarHeaderItemComponent icon={chartIcon} text="Data" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <div className="flex flex-col gap-2">
              <SidebarItemComponent text="Book Stock Chart" />
              <SidebarItemComponent text="Visitor Chart" />
              <SidebarItemComponent text="Borrower Chart" />
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderColor="white" mb="1rem">
          <AccordionButton border="none" ring="none" outline="none" outlineColor="white">
            <SidebarHeaderItemComponent icon={libraryIcon} text="Manage Entity" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <div className="flex flex-col gap-2">
              <SidebarItemComponent id="manage-author" text="Author" />
              <SidebarItemComponent text="Publisher" />
              <SidebarItemComponent text="Book" />
              <SidebarItemComponent text="Shelf" />
              <SidebarItemComponent text="Borrower Data" />
              <SidebarItemComponent text="Visitor" />
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem borderColor="white" mb="1rem">
          <AccordionButton border="none" ring="none" outline="none" outlineColor="white">
            <SidebarHeaderItemComponent icon={clockIcon} text="History" />
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <div className="flex flex-col gap-2">
              <SidebarItemComponent text="Recent Activities" />
              <SidebarItemComponent text="Check-in" />
              <SidebarItemComponent text="Borrower" />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <div className="absolute inset-x-0 bottom-0">
        <AccountSidebarItemComponent />
      </div>
    </div>
  );
}
