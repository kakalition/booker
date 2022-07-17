import { Checkbox, IconButton } from '@chakra-ui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

type Params = {
  onEditClick: () => void,
  onDeleteClick: () => void,
};

export default function RowActionsElement(params: Params) {
  const { onEditClick, onDeleteClick } = params;
  return (
    <div className="flex flex-row items-center gap-6">
      <IconButton bgColor="transparent" aria-label="edit author" onClick={onEditClick}>
        <PencilIcon className="h-6 w-6 stroke-gray-500" />
      </IconButton>
      <IconButton bgColor="transparent" aria-label="delete author" onClick={onDeleteClick}>
        <TrashIcon className="h-6 w-6 stroke-gray-500" />
      </IconButton>
      <Checkbox size="lg" />
    </div>
  );
}
