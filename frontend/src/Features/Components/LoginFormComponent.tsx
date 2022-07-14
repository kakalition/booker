import {
  Button, FormControl, FormLabel, Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

export default function LoginFormComponent(props: any) {
  const { onSubmitForm } = props;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: onSubmitForm,
  });

  return (
    <div className="flex w-[40%] flex-col items-start justify-center">
      <h1 className="font-inter mb-16 text-4xl font-medium leading-tight text-black">{'Welcome Back,\nFellow Librarian!'}</h1>
      <form className="mb-8 w-full" onSubmit={formik.handleSubmit}>
        <FormControl mb="1rem">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" value={formik.values.email} onChange={formik.handleChange} />
        </FormControl>
        <FormControl mb="2rem">
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" value={formik.values.password} onChange={formik.handleChange} />
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
          Login
        </Button>
      </form>
      <p>
        Don't have an account, yet?
        {' '}
        <Link className="text-[#508BFF] underline" to="/register">Sign up here</Link>
      </p>
    </div>
  );
}
