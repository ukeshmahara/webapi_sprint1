import { registerApi, loginApi, RegisterPayload, LoginPayload } from "../api/auth";
import { setToken, setUser } from "../cookies";

export const registerAction = async (payload: RegisterPayload) => {
  const response = await registerApi(payload);
  return response;
};

export const loginAction = async (payload: LoginPayload) => {
  const response = await loginApi(payload);

  if (response.success && response.data?.access_token) {
    setToken(response.data.access_token);
    if (response.data.user) {
      setUser(response.data.user);
    }
  }

  return response;
};