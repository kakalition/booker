import axios, { AxiosResponse } from 'axios';
import { curry } from 'ramda';
import LoginPayload from './Types/LoginPayload';
import RegisterPayload from './Types/RegisterPayload';

const baseRegister = (
  onSuccess: (response: AxiosResponse) => void,
  onFailed: (error: any) => void,
  data: RegisterPayload,
) => axios
  .post('/register', data)
  .then(onSuccess, onFailed);

const baseLogin = (
  onSuccess: (response: AxiosResponse) => void,
  onFailed: (error: any) => void,
  data: LoginPayload,
) => axios
  .post('/login', data)
  .then(onSuccess, onFailed);

namespace AuthAPI {
  export const register = curry(baseRegister);
  export const login = curry(baseLogin);
}

export default AuthAPI;
