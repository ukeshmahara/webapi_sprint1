const TOKEN_KEY = "sikhshasathi_token";
const USER_KEY = "sikhshasathi_user";

export const setToken = (token: string): void => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  document.cookie = `${TOKEN_KEY}=${token}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

export const getToken = (): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${TOKEN_KEY}=([^;]+)`));
  return match ? match[2] : null;
};

export const removeToken = (): void => {
  document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const setUser = (user: object): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = (): object | null => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
};

export const clearAuth = (): void => {
  removeToken();
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_KEY);
  }
};