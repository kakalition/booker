import { Button } from '@chakra-ui/react';

export default function SingleSidebarItemComponent(props: any) {
  const { icon, text, onClick } = props;

  return (
    <Button
      justifyContent="start"
      width="100%"
      bg="transparent"
      fontFamily="Roboto"
      fontWeight="normal"
      fontSize="md"
      marginBottom="0.5rem"
      onClick={onClick}
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
