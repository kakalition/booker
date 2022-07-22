import {
  Button, Checkbox, FormControl, FormHelperText, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import moment from 'moment';
import {
  useMemo, useState,
} from 'react';
import HtmlHelper from '../../../../Functions/Helpers/HtmlHelper';

export default function HManageBorrowerDialog(
  fetchData: () => void,
  bookData: any,
  visitorData: any,
) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCreate, setIsCreate] = useState(true);
  const [entityId, setEntityId] = useState(-1);
  const toast = useToast();

  const [date, setDate] = useState<any>(moment().format('YYYY-MM-DD'));

  const booksElement = useMemo(() => bookData?.map((element: any) => (
    <option key={element.id} value={element.id}>{element.title}</option>
  )), [bookData]);

  const visitorsElement = useMemo(() => visitorData?.map((element: any) => (
    <option key={element.id} value={element.id}>{element.name}</option>
  )), [visitorData]);

  const fillForm = (data: any) => {
    (document.querySelector('#visitor_id') as HTMLInputElement).value = data.visitor_id;
    (document.querySelector('#book_id') as HTMLInputElement).value = data.book_id;
    (document.querySelector('#total_borrowed') as HTMLInputElement).value = data.total_borrowed;
    (document.querySelector('#end_date') as HTMLInputElement).value = HtmlHelper.jsonToHtmlDate(data.end_date);
    (document.querySelector('#status') as HTMLInputElement).checked = data.status;
  };

  const openEditDialog = (id: number) => {
    setIsCreate(false);
    setEntityId(id);

    axios
      .get(`/api/borrowers/${id}`)
      .then((response) => { fillForm(response.data); });

    onOpen();
  };

  const openCreateDialog = () => {
    setIsCreate(true);
    onOpen();
    setTimeout(() => {
      (document.querySelector('#status-control') as HTMLDivElement).style.display = 'none';
    }, 100);
  };

  const handleCreate = () => {
    const formData = HtmlHelper.formDataToJson('manage-borrower-form');
    axios.post('/api/borrowers', formData)
      .then((response) => {
        toast({ title: response.statusText, status: 'success', position: 'top' });
        fetchData();
      });
  };

  const handleEdit = () => {
    const formData = HtmlHelper.formDataToJson('manage-borrower-form');

    axios.put(`api/borrowers/${entityId}`, formData)
      .then((response) => {
        toast({ title: response.statusText, status: 'success', position: 'top' });
        fetchData();
      });

    onClose();
  };

  const modalElement = (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="5xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`${isCreate ? 'Create' : 'Edit'} Borrower Data`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={3}>
          <form id="manage-borrower-form" className="flex flex-col gap-8">
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
              <FormLabel>Title</FormLabel>
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
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input
                id="end_date"
                name="end_date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <FormHelperText>{moment(date).format('dddd - MMMM/DD/YYYY')}</FormHelperText>
            </FormControl>
            <div id="status-control">
              <FormControl className="flex flex-row items-center justify-between">
                <FormLabel>Is already returned?</FormLabel>
                <Checkbox id="status" />
              </FormControl>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button colorScheme="blue" ml={3} onClick={isCreate ? handleCreate : handleEdit}>
            {`${isCreate ? 'Create' : 'Edit'}`}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  return {
    modalElement,
    openCreateDialog,
    openEditDialog,
  };
}
