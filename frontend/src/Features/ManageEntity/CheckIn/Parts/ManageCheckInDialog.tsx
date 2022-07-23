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
  useEffect,
  useMemo, useState,
} from 'react';
import CheckInAPI from '../../../../API/CheckInAPI';
import VisitorAPI from '../../../../API/VisitorAPI';
import HtmlHelper from '../../../../Functions/Helpers/HtmlHelper';

export default function useManageCheckInDialog(fetchData: () => void) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [visitorsData, setVisitorsData] = useState([]);
  const toast = useToast();

  const mapToOption = (json: any) => (
    <option key={json.id} value={json.id}>{json.name}</option>
  );

  useEffect(() => {
    VisitorAPI.get()
      .then((response) => setVisitorsData(response.data));
  }, []);

  const visitorOptions = useMemo(
    () => visitorsData.map((json) => mapToOption(json)),
    [visitorsData],
  );

  const postCheckIn = () => {
    const formData = HtmlHelper.formDataToJson('check-in-form');
    CheckInAPI.post(formData)
      .then((response) => {
        toast({ title: response.statusText, position: 'top', status: 'success' });
        fetchData();
        onClose();
      });
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
        <ModalHeader>Create Check-in Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={3}>
          <form id="check-in-form" className="flex flex-col gap-8">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Select
                id="visitor_id"
                name="visitor_id"
              >
                {visitorOptions}
              </Select>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button colorScheme="blue" ml={3} onClick={postCheckIn}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  return {
    ModalElement: () => modalElement,
    openModal: onOpen,
  };
}
