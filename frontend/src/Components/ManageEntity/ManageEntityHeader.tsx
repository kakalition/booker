import { Divider } from '@chakra-ui/react';

type Params = {
  title: string,
  body: string,
};

export default function ManageEntityHeader(params: Params) {
  const { title, body } = params;
  return (
    <>
      <h1 className="font-inter mb-2 text-4xl font-medium text-black">{title}</h1>
      <h2 className="font-roboto mb-6 text-lg text-gray-500">{body}</h2>
      <Divider mb="1.5rem" />
    </>
  );
}
