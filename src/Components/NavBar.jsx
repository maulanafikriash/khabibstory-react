import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block text-center px-4 py-3 rounded-md text-lg sm:text-sm font-semibold transition-all ${
      isActive
        ? "text-yellow-300 bg-white/5"
        : "text-white hover:text-yellow-300 hover:bg-white/5"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* top bar */}
      <div className="backdrop-blur-sm bg-black/30">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/khabib_img/ufc_logo.png"
                alt="logo"
                className="h-12 w-auto"
              />
              <span className="sr-only">home</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex md:items-center md:space-x-6 capitalize">
              <NavLink to="/" className={linkClass}>
                home
              </NavLink>
              <NavLink to="/awal-karir" className={linkClass}>
                awal karir
              </NavLink>
              <NavLink to="/pencapaian" className={linkClass}>
                pencapaian
              </NavLink>
              <NavLink to="/akhir-karir" className={linkClass}>
                akhir karir
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Backdrop overlay (darker for better contrast) */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        {/* stronger overlay to hide background content clearly */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
      </div>

      {/* Mobile full-screen menu (centered) */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="w-full max-w-md mx-4 bg-gradient-to-b from-slate-900/95 to-black/95 rounded-2xl p-6 shadow-xl ring-1 ring-white/5">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src="/assets/khabib_img/ufc_logo.png"
                alt="logo"
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav>
            <ul className="space-y-4 capitalize">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/awal-karir"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  awal karir
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pencapaian"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  pencapaian
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/akhir-karir"
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  akhir karir
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Khabib Profile
          </div>
        </div>
      </div>
    </header>
  );
}
