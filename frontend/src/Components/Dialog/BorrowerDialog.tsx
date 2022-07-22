import {
  Button, FormControl, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

const formDataToJson = (form: FormData) => {
  const data: any = {};
  form.forEach((value, key) => { data[key] = value; });
  return data;
};

class BorrowerDialog {
  handleEdit = (entityId: number) => {
    const formData = new FormData(
      document.querySelector('#manage-borrower-form') as HTMLFormElement,
    );

    axios.put(`api/borrowers/${entityId}`, formDataToJson(formData))
      .then(console.log);

    onClose();
  };

  fillForm = (data: any) => {
    (document.querySelector('#visitor_id') as HTMLInputElement).value = data.visitor_id;
    (document.querySelector('#book_id') as HTMLInputElement).value = data.book_id;
    (document.querySelector('#total_borrowed') as HTMLInputElement).value = data.total_borrowed;
  };

  modalContent = () => (
    <ModalContent>
      <ModalHeader>Edit Book</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <form id="manage-borrower-form">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Select
              id="visitor_id"
              name="visitor_id"
            >
              {visitorsElement}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Select
              id="book_id"
              name="book_id"
            >
              {booksElement}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Total Borrowed</FormLabel>
            <Input
              id="total_borrowed"
              name="total_borrowed"
              type="number"
            />
          </FormControl>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button colorScheme="blue" ml={3} onClick={handleEdit}>
          Edit
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default BorrowerDialog;
