
"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4 text-white relative">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">DevBlog</Link>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-indigo-700 lg:bg-transparent lg:flex items-center gap-6 text-sm font-medium z-10 transition-all duration-300 ease-in-out ${
            menuOpen ? "block p-4 space-y-4" : "hidden lg:flex"
          }`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-gray-200 transition duration-300 block"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/addBlog"
              className="hover:text-gray-200 transition duration-300 block"
              onClick={() => setMenuOpen(false)}
            >
              Add Blog
            </Link>
          </li>

          {status === "authenticated" ? (
            <>
              <li>
                <Link
                  href="/my_blogs"
                  className="hover:text-gray-200 transition duration-300 block"
                  onClick={() => setMenuOpen(false)}
                >
                  My Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  width={32}
                  height={32}
                  alt={session?.user?.name || "User"}
                  className="rounded-full ring-2 ring-white"
                />
              </li>
              <li>
                <button
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                  className="bg-white text-pink-600 font-semibold px-3 py-1 rounded-md hover:bg-gray-100 transition w-full lg:w-auto"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="hover:text-gray-200 transition duration-300 block"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-gray-200 transition duration-300 block"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}