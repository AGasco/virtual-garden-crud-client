import { AuthLogin, AuthRegister, AuthResponse } from '@/types';
import { axiosInstance } from '../api/axios';

export const registerUser = async (userData: AuthRegister) => {
  const response = await axiosInstance.post<AuthResponse>(
    '/auth/register',
    userData
  );
  return response.data;
};

export const loginUser = async (credentials: AuthLogin) => {
  const response = await axiosInstance.post<AuthResponse>(
    '/auth/login',
    credentials
  );
  return response.data;
};
