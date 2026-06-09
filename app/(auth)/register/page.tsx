import RegisterForm from "../_components/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - SikhshaSathi",
};

export default function RegisterPage() {
  return <RegisterForm />;
}