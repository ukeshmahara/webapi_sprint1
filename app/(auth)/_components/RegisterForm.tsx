"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerSchema, RegisterFormData } from "./schema";
import { registerAction } from "@/lib/actions/auth-action";

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setServerError(null);
    try {
      const response = await registerAction({
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
      });
      if (response.success) {
        router.push("/login");
      } else {
        setServerError(response.message || "Registration failed. Please try again.");
      }
    } catch (err: unknown) {
      setServerError(
        err instanceof Error ? err.message : "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h1 className="form-title">Create Account</h1>
        <p className="form-subtitle">Join SikhshaSathi</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {serverError && (
          <div className="server-error">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {serverError}
          </div>
        )}

        {/* Full Name */}
        <div className="field-group">
          <label className="field-label">Full Name</label>
          <div className={`input-wrapper ${errors.fullName ? "input-error" : ""}`}>
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <input
              {...register("fullName")}
              type="text"
              placeholder="Enter your full name"
              className="field-input"
              autoComplete="name"
            />
          </div>
          {errors.fullName && <p className="field-error">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="field-group">
          <label className="field-label">Email</label>
          <div className={`input-wrapper ${errors.email ? "input-error" : ""}`}>
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
              </svg>
            </span>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="field-input"
              autoComplete="email"
            />
          </div>
          {errors.email && <p className="field-error">{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="field-group">
          <label className="field-label">Phone Number</label>
          <div className={`input-wrapper ${errors.phoneNumber ? "input-error" : ""}`}>
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
            </span>
            <input
              {...register("phoneNumber")}
              type="tel"
              placeholder="Enter your phone number"
              className="field-input"
              autoComplete="tel"
            />
          </div>
          {errors.phoneNumber && <p className="field-error">{errors.phoneNumber.message}</p>}
        </div>

        {/* Password */}
        <div className="field-group">
          <label className="field-label">Password</label>
          <div className={`input-wrapper ${errors.password ? "input-error" : ""}`}>
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="field-input"
              autoComplete="new-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((p) => !p)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="field-error">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="field-group">
          <label className="field-label">Confirm Password</label>
          <div className={`input-wrapper ${errors.confirmPassword ? "input-error" : ""}`}>
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              {...register("confirmPassword")}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              className="field-input"
              autoComplete="new-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirm((p) => !p)}
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {errors.confirmPassword && <p className="field-error">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? (
            <span className="btn-loading">
              <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Creating account...
            </span>
          ) : "Register"}
        </button>

        <div className="divider"><span>or continue with</span></div>

        <button type="button" className="btn-google">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link href="/login" className="auth-link">Login</Link>
        </p>
      </form>
    </div>
  );
}