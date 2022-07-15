import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import PathContext from '../../../Context/PathContext';

export default function SidebarItemComponent(props: any) {
  const { id, text, onClick } = props;
  const path = useContext<any>(PathContext);

  return (
    <div className="flex w-full flex-row">
      <div className="w-[15%]" />
      <div className="w-[85%]">
        <Button
          justifyContent="start"
          width="100%"
          bg="transparent"
          bgColor={path === id ? '#c5d4e8' : 'white'}
          fontFamily="Roboto"
          fontWeight="normal"
          fontSize="md"
          onClick={onClick}
        >
          {text}
        </Button>
      </div>
    </div>
  );
}
