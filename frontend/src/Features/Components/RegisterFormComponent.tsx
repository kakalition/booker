import {
  Button, FormControl, FormLabel, Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AuthAPI from '../../API/AuthAPI';
import HtmlHelper from '../../Functions/Helpers/HtmlHelper';

export default function RegisterFormComponent() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = HtmlHelper.formDataToJson('register-form');
    formData.password_confirmation = formData.password;

    AuthAPI.register(formData)
      .then((response) => console.log(response));
  };

  return (
    <div className="flex w-[40%] flex-col items-start justify-center">
      <h1 className="font-inter mb-12 text-4xl font-medium text-black">Create New Account</h1>
      <form id="register-form" className="mb-8 w-full" onSubmit={onSubmit}>
        <FormControl mb="1rem">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" name="name" type="text" />
        </FormControl>
        <FormControl mb="1rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" name="email" type="email" />
        </FormControl>
        <FormControl mb="2rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" name="password" type="password" />
        </FormControl>
        <Button
          type="submit"
          bgColor="#508BFF"
          color="#FFFFFF"
          width="100%"
          _hover={{
            bgColor: '#2D69E0',
          }}
        >
          Register
        </Button>
      </form>
      <p>
        Already have an account?
        {' '}
        <Link className="text-[#508BFF] underline" to="/login">Sign in here</Link>
      </p>
    </div>
  );
}
