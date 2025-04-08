"use client";
import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Optional: close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Overlay (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-white border-r border-gray-200 shadow-md p-4 transition-transform transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button (mobile only) */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} aria-label="Close sidebar">
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        <nav className="space-y-2">
          <Link
            href="/"
            className="block rounded px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            🏠 Home
          </Link>
          <Link
            href="/doc"
            className="block rounded px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            📚 Dokumentasi
          </Link>
          <Link
            href="/features"
            className="block rounded px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            ⚙️ Fitur
          </Link>
          <Link
            href="/about"
            className="block rounded px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
          >
            👨‍💻 Tentang Kami
          </Link>
        </nav>
      </aside>
    </>
  );
}
