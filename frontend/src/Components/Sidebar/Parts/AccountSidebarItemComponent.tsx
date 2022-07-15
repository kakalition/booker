import { IconButton } from '@chakra-ui/react';
import { LogoutIcon } from '@heroicons/react/outline';

export default function AccountSidebarItemComponent() {
  return (
    <div className="flex w-full flex-row items-center justify-between border-t p-6">
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
