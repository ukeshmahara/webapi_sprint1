import axiosInstance from "./axios-instance";
import { ENDPOINTS } from "./endpoints";

export interface RegisterPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    access_token?: string;
    user?: {
      id: string;
      fullName: string;
      email: string;
    };
  };
}

export const registerApi = async (payload: RegisterPayload): Promise<AuthResponse> => {
  const response = await axiosInstance.post(ENDPOINTS.AUTH.REGISTER, payload);
  return response.data;
};

export const loginApi = async (payload: LoginPayload): Promise<AuthResponse> => {
  const response = await axiosInstance.post(ENDPOINTS.AUTH.LOGIN, payload);
  return response.data;
};