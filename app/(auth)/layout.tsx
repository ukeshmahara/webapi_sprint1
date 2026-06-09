import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SikhshaSathi – Auth",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-root">

      {/* ── Left panel ── */}
      <div className="auth-left">

        {/* Logo + brand */}
        <div className="auth-logo">
          <img
            src="/logo.png"
            alt="SikhshaSathi Logo"
            className="logo-img"
          />
          <div className="logo-text-block">
            <span className="logo-text">
              <span className="logo-dark">Sikhsha</span>
              <span className="logo-blue">Sathi</span>
            </span>
            <p className="logo-tagline">Find the best school for a bright future</p>
          </div>
        </div>

        {/* Illustration */}
        <div className="auth-illustration">
          <img
            src="/education.png"
            alt="Students reading together"
            className="illustration-img"
          />
        </div>

      </div>

      {/* ── Right panel – form ── */}
      <div className="auth-right">
        {children}
      </div>

      <style>{`
        .auth-root {
          min-height: 100vh;
          background: #eef2ff;
          display: flex;
          align-items: stretch;
          justify-content: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* ════ LEFT PANEL ════ */
        .auth-left {
          flex: 1;
          max-width: 500px;
          background: #fff;
          border-radius: 0;
          padding: 44px 40px 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          overflow: hidden;
        }

        /* ── Logo row ── */
        .auth-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .logo-img {
          width: 56px;
          height: 56px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .logo-text-block {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .logo-text {
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.4px;
          line-height: 1.1;
        }
        .logo-dark { color: #1e293b; }
        .logo-blue { color: #1a56db; }

        .logo-tagline {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 400;
          margin: 0;
        }

        /* ── Illustration ── */
        .auth-illustration {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 0 32px;
        }

        .illustration-img {
          width: 100%;
          max-width: 420px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        /* ════ RIGHT PANEL ════ */
        .auth-right {
          flex: 1;
          max-width: 500px;
          background: #fff;
          border-left: 1px solid #e8edf5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 44px;
        }

        /* ════ FORM CARD ════ */
        .form-card { width: 100%; max-width: 390px; }

        .form-header { text-align: center; margin-bottom: 28px; }
        .form-title {
          font-size: 1.9rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px;
          letter-spacing: -0.5px;
        }
        .form-subtitle { font-size: 0.88rem; color: #64748b; margin: 0; }

        /* ── Server error ── */
        .server-error {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.84rem;
          margin-bottom: 16px;
        }

        /* ── Fields ── */
        .field-group { margin-bottom: 15px; }

        .field-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
          transition: border-color 0.15s, box-shadow 0.15s;
          overflow: hidden;
        }
        .input-wrapper:focus-within {
          border-color: #1a56db;
          box-shadow: 0 0 0 3px rgba(26,86,219,0.08);
          background: #fff;
        }
        .input-wrapper.input-error { border-color: #ef4444; }
        .input-wrapper.input-error:focus-within {
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }

        .input-icon {
          padding: 0 12px;
          color: #94a3b8;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .field-input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 11px 4px;
          font-size: 0.9rem;
          color: #1e293b;
          outline: none;
        }
        .field-input::placeholder { color: #94a3b8; }

        .toggle-password {
          padding: 0 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #94a3b8;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: color 0.15s;
        }
        .toggle-password:hover { color: #475569; }

        .field-error {
          font-size: 0.77rem;
          color: #ef4444;
          margin: 4px 0 0;
        }

        /* ── Forgot ── */
        .forgot-row { text-align: right; margin: -4px 0 14px; }
        .forgot-link {
          font-size: 0.82rem;
          color: #1a56db;
          text-decoration: none;
          font-weight: 500;
        }
        .forgot-link:hover { text-decoration: underline; }

        /* ── Buttons ── */
        .btn-primary {
          width: 100%;
          padding: 13px;
          background: #1a56db;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          margin-bottom: 16px;
          letter-spacing: 0.2px;
        }
        .btn-primary:hover:not(:disabled) { background: #1648c0; }
        .btn-primary:active:not(:disabled) { transform: scale(0.99); }
        .btn-primary:disabled { opacity: 0.65; cursor: not-allowed; }

        .btn-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .spinner { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .btn-google {
          width: 100%;
          padding: 11px;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: border-color 0.15s, background 0.15s;
          margin-bottom: 20px;
        }
        .btn-google:hover { border-color: #1a56db; background: #f8fafc; }

        /* ── Divider ── */
        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #94a3b8;
          font-size: 0.8rem;
          margin-bottom: 14px;
        }
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        /* ── Auth switch ── */
        .auth-switch {
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }
        .auth-link {
          color: #1a56db;
          font-weight: 600;
          text-decoration: none;
        }
        .auth-link:hover { text-decoration: underline; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .auth-root {
            flex-direction: column;
            align-items: center;
            background: #fff;
          }
          .auth-left {
            max-width: 100%;
            width: 100%;
            padding: 28px 24px 0;
            background: #eef2ff;
            border-radius: 0 0 24px 24px;
            min-height: auto;
          }
          .illustration-img {
            max-width: 260px;
          }
          .auth-right {
            max-width: 100%;
            width: 100%;
            border-left: none;
            padding: 32px 24px 40px;
          }
          .form-card { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}