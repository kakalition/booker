interface ManageEntityDialog {
  createPayload: any,
  createModal: (
    isEdit: boolean,
    isOpen: boolean,
    onClose: () => void,
    editEntity: () => void,
    postEntity: () => void,
  ) => React.ReactNode,
  fetchData: (id: number, onFailed: (error: any) => void) => void,
}

export default ManageEntityDialog;
