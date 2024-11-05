import { AuthLogin, AuthRegister } from '@/types';
import { axiosInstance } from '../api/axios';

export const registerUser = async (userData: AuthRegister) => {
  const response = await axiosInstance.post<AuthRegister>(
    '/auth/register',
    userData
  );
  return response.data;
};

export const loginUser = async (credentials: AuthLogin) => {
  const response = await axiosInstance.post<AuthLogin>(
    '/auth/login',
    credentials
  );
  return response.data;
};
