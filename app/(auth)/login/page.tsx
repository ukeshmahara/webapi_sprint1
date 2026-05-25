import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";

export default function LoginPage() {
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
              Welcome
            </h1>

            <p className="mt-3 text-slate-400">
              Login to continue
            </p>

          </div>

          {/* FORM */}
          <form className="mt-10 space-y-6">

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
                  placeholder="Enter your password"
                  className="ml-3 w-full bg-transparent text-sm outline-none"
                />

                <Eye
                  size={18}
                  className="cursor-pointer text-slate-400"
                />

              </div>

              {/* FORGOT PASSWORD */}
              <div className="mt-3 text-right">

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Login
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

          {/* REGISTER */}
          <p className="mt-10 text-center text-sm text-slate-500">

            Don&apos;t have an account?{" "}

            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>
    </main>
  );
}