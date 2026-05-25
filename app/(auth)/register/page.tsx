import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, User, Eye } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FC] px-6">

      {/* CONTAINER */}
      <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex justify-center">

          <Image
            src="/images/education.png"
            alt="Education"
            width={500}
            height={500}
            className="h-auto w-full max-w-md"
            priority
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="mx-auto w-full max-w-md">

          {/* TITLE */}
          <div>

            <h1 className="text-5xl font-bold text-slate-900">
              Register
            </h1>

            <p className="mt-3 text-slate-400">
              Create your new account
            </p>

          </div>

          {/* FORM */}
          <form className="mt-10 space-y-6">

            {/* FULL NAME */}
            <div>

              <label className="mb-3 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-4">

                <User
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="ml-3 w-full bg-transparent text-sm outline-none"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="mb-3 block text-sm font-medium text-slate-700">
                Email
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-4">

                <Mail
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ml-3 w-full bg-transparent text-sm outline-none"
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="mb-3 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-4">

                <Lock
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="password"
                  placeholder="Create password"
                  className="ml-3 w-full bg-transparent text-sm outline-none"
                />

                <Eye
                  size={18}
                  className="cursor-pointer text-slate-400"
                />

              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            <div>

              <label className="mb-3 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-4">

                <Lock
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="ml-3 w-full bg-transparent text-sm outline-none"
                />

                <Eye
                  size={18}
                  className="cursor-pointer text-slate-400"
                />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

          {/* DIVIDER */}
          <div className="my-8 flex items-center gap-4">

            <div className="h-[1px] flex-1 bg-slate-200"></div>

            <span className="text-sm text-slate-400">
              or continue with
            </span>

            <div className="h-[1px] flex-1 bg-slate-200"></div>

          </div>

          {/* GOOGLE BUTTON */}
          <button className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              className="h-6 w-6"
            />

          </button>

          {/* LOGIN */}
          <p className="mt-10 text-center text-sm text-slate-500">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>
    </main>
  );
}