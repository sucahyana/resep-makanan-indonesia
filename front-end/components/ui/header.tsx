"use client";
import Link from "next/link";
import Logo from "./logo";
import { useEffect, useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import Sidebar from "../sidebar";

interface HeaderProps {
  showSidebar?: boolean;
}

export default function Header({ showSidebar = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-2 z-30 w-full md:top-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-2 shadow-lg backdrop-blur-xs">
            <div className="flex w-full items-center justify-between sm:w-auto">
              <Logo />
              <button
                onClick={() => setIsOpen(true)}
                className="sm:hidden rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-800 hover:bg-gray-200"
              >
                🔍
              </button>
            </div>

            <div className="hidden sm:flex flex-1">
              <button
                onClick={() => setIsOpen(true)}
                className="btn-sm bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200"
              >
                <span className="hidden sm:inline">Search</span>
                <kbd className="ml-2 hidden rounded bg-white px-1.5 py-0.5 text-xs text-gray-500 sm:inline">
                  Ctrl K
                </kbd>
              </button>
            </div>

            <ul className="flex w-full flex-col items-start gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-3">
              <li className="w-full sm:w-auto">
                <Link
                  href="/signin"
                  className="block w-full text-center btn-sm bg-white text-gray-800 hover:bg-gray-50"
                >
                  Login
                </Link>
              </li>
              <li className="w-full sm:w-auto">
                <Link
                  href="/signup"
                  className="block w-full text-center btn-sm bg-gray-800 text-white hover:bg-gray-900"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Optional Sidebar */}
      {showSidebar && <Sidebar/>}

      {/* Search Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start justify-center p-4 pt-20">
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
                <p className="text-sm text-gray-500">Ketik untuk mulai mencari...</p>
              ) : (
                <ul className="space-y-1">
                  <li>
                    <a href="/doc" className="block rounded px-3 py-2 hover:bg-gray-100">
                      📄 Dokumentasi API
                    </a>
                  </li>
                  <li>
                    <a href="/signup" className="block rounded px-3 py-2 hover:bg-gray-100">
                      👤 Daftar Akun
                    </a>
                  </li>
                  <li>
                    <a href="/signin" className="block rounded px-3 py-2 hover:bg-gray-100">
                      🔐 Masuk
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
