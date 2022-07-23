import axios from 'axios';
import LoginPayload from './Types/LoginPayload';
import RegisterPayload from './Types/RegisterPayload';

namespace AuthAPI {
  export const register = async (data: RegisterPayload) => {
    await axios.get('/sanctum/csrf-cookie');
    return axios.post('/register', data);
  };

  export const login = async (data: LoginPayload) => {
    await axios.get('/sanctum/csrf-cookie');
    return axios.post('/login', data);
  };
}

export default AuthAPI;
