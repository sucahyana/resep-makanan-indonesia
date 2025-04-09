import Link from "next/link";
import Logo from "./logo";
import { useEffect, useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import Sidebar from "../sidebar";
import { Menu } from "lucide-react";
import { LuSearchCode } from "react-icons/lu";

export default function Header({
  showSidebar = false,
}: {
  showSidebar?: boolean;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  return (
    <>
      <header className="fixed top-0 z-60 w-full bg-white shadow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Sidebar toggle on mobile */}
            <div className="flex items-center gap-3 sm:gap-4">
              {showSidebar && (
                <button
                  className="md:hidden"
                  onClick={() => setIsSidebarOpen(true)}
                  aria-label="Buka menu"
                >
                  <Menu className="w-6 h-6 text-gray-800" />
                </button>
              )}
              <Logo />
            </div>

            {/* Search Button (Mobile & Desktop) */}
            {/* Search Button (Responsive) */}
            <div className="flex items-center">
              {/* Mobile - Icon only */}
              <span className="sm:hidden my-auto rounded-md  hover:from-slate-400 hover:to-slate-200">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                  className="text-gray-800"
                >
                  <LuSearchCode size={28} className=" text-gray-800" />
                </button>
              </span>

              {/* Desktop - Full button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden sm:flex items-center btn-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Search
                <kbd className="ml-2 rounded bg-white px-1.5 py-0.5 text-xs text-gray-500">
                  Ctrl K
                </kbd>
              </button>
            </div>

            {/* Auth Buttons */}
            <ul className="flex gap-2">
              <li>
                <Link
                  href="/signin"
                  className="btn-sm text-gray-800 hover:bg-gray-100"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm bg-gray-800 text-white hover:bg-gray-900"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Search Dialog */}
      <Dialog
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        className="relative z-[60]"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start justify-center p-4 pt-24">
          <Dialog.Panel className="w-full max-w-xl rounded-xl bg-white p-4 shadow-xl">
            <input
              ref={inputRef}
              type="text"
              placeholder="Cari dokumentasi atau halaman..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="mt-4 space-y-2">
              {query === "" ? (
                <p className="text-sm text-gray-500">
                  Ketik untuk mulai mencari...
                </p>
              ) : (
                <ul className="space-y-1">
                  <li>
                    <a
                      href="/doc"
                      className="block rounded px-3 py-2 hover:bg-gray-100"
                    >
                      📄 Dokumentasi API
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="block rounded px-3 py-2 hover:bg-gray-100"
                    >
                      👤 Daftar Akun
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signin"
                      className="block rounded px-3 py-2 hover:bg-gray-100"
                    >
                      🔐 Masuk
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Spacer supaya konten tidak ketutup header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
