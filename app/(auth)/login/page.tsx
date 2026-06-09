import LoginForm from "../_components/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - SikhshaSathi",
};

export default function LoginPage() {
  return <LoginForm />;
}