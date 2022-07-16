import { useDisclosure, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import ManageEntityDialog from '../../Functions/Interfaces/ManageEntityDialog';

export default function useManageEntityDialog(
  entityName: string,
  entityDialog: ManageEntityDialog,
  refetchCallback: () => void,
  createAPI: (payload: any) => Promise<AxiosResponse>,
  editAPI: (id: number, payload: any) => Promise<AxiosResponse>,
) {
  const [isEdit, setIsEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tempId, setTempId] = useState(-1);
  const toast = useToast();

  const onPostEntitySuccess = (response: AxiosResponse) => {
    if (response.status === 201) {
      onClose();
      refetchCallback();
      toast({ title: `${entityName} Created!`, status: 'success', position: 'top' });
    } else {
      onClose();
      console.log(response);
    }
  };

  const onPostEntityFailed = (error: any) => {
    onClose();
    refetchCallback();
    toast({
      title: `Failed to Create ${entityName}!`, description: error.response.data.message, status: 'error', position: 'top',
    });
  };

  const postEntity = () => {
    createAPI(entityDialog.createPayload())
      .then(onPostEntitySuccess, onPostEntityFailed);
  };

  const onEditEntitySuccess = (response: AxiosResponse) => {
    if (response.status === 200) {
      onClose();
      refetchCallback();
      toast({ title: `${entityName} Edited!`, status: 'success', position: 'top' });
    } else {
      onClose();
      console.log(response);
    }
  };

  const onEditEntityFailed = (error: any) => {
    onClose();
    refetchCallback();
    toast({
      title: `Failed to Edit ${entityName}!`, description: error.response.data.message, status: 'error', position: 'top',
    });
  };

  const editEntity = () => {
    editAPI(tempId, entityDialog.createPayload())
      .then(onEditEntitySuccess, onEditEntityFailed);
  };

  const openCreateDialog = () => {
    setIsEdit(false);
    onOpen();
  };

  const onFetchAuthorDataFailed = (error: any) => {
    toast({
      title: 'Failed to Get Author Data!', description: error.response.data.message, status: 'error', position: 'top',
    });
    onClose();
  };

  const fetchAuthorData = (id: number) => entityDialog.fetchData(id, onFetchAuthorDataFailed);

  const openEditDialog = (id: number) => {
    setIsEdit(true);
    setTempId(id);
    onOpen();
    fetchAuthorData(id);
  };

  return {
    openCreateDialog,
    openEditDialog,
    ModalComponent: entityDialog.createModal(isEdit, isOpen, onClose, editEntity, postEntity),
  };
}
