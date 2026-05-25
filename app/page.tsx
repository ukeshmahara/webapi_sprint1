import Link from "next/link";
import {
  Home,
  Search,
  Heart,
  User,
  School,
  Star,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">

      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* LOGO */}
          <h1 className="text-2xl font-bold text-blue-600">
            Sikhsha Sathi
          </h1>

          {/* MENU */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="flex items-center gap-2 font-medium text-blue-600"
            >
              <Home size={18} />
              Home
            </Link>

            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
              <Search size={18} />
              Search
            </button>

            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
              <Heart size={18} />
              Favorites
            </button>

            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
              <User size={18} />
              Profile
            </button>

          </nav>

          {/* AUTH BUTTONS */}
          <div className="flex items-center gap-3">

            <Link
              href="/login"
              className="rounded-xl px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Register
            </Link>

          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="mx-auto mt-10 max-w-7xl px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-16 text-white shadow-xl">

          <div className="text-center">

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Welcome to Sikhsha Sathi
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
              AI Smart School Recommendation System that helps students
              discover the best schools based on location, budget,
              academics, and preferences.
            </p>

            {/* SEARCH BAR */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl bg-white px-5 py-4 shadow-lg">

              <Search
                size={22}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search schools..."
                className="ml-4 w-full bg-transparent text-slate-700 outline-none"
              />

            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

              <Link
                href="/register"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Get Started
              </Link>

              <Link
                href="/login"
                className="rounded-2xl border border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Login
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-3">

          {/* CARD */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md">

            <div className="mb-5 inline-flex rounded-full bg-blue-100 p-4 text-blue-600">
              <School size={28} />
            </div>

            <h3 className="text-2xl font-bold text-slate-800">
              Smart Recommendation
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Get AI-powered school suggestions according to your
              interests and academic goals.
            </p>

          </div>

          {/* CARD */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md">

            <div className="mb-5 inline-flex rounded-full bg-yellow-100 p-4 text-yellow-600">
              <Star size={28} />
            </div>

            <h3 className="text-2xl font-bold text-slate-800">
              Top Rated Schools
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Compare highly rated schools based on facilities,
              academics, and student reviews.
            </p>

          </div>

          {/* CARD */}
          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md">

            <div className="mb-5 inline-flex rounded-full bg-green-100 p-4 text-green-600">
              <MapPin size={28} />
            </div>

            <h3 className="text-2xl font-bold text-slate-800">
              Nearby Schools
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Discover schools near your location quickly and easily
              using smart location search.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}