"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Logos } from "./Logos";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="w-full h-16 md:h-20 lg:h-24 text-white px-4 py-5 md:px-20 md:py-4 flex items-center justify-between border-b-2 border-purple-90">
        <Logos />
        <nav className="hidden md:flex items-center font-medium">
          <Link
            className={`px-5 py-3 lg:px-6 text-sm lg:text-base ${
              pathname === "/" && "border border-grey-15 rounded-lg"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`px-5 py-3 lg:px-6 text-sm lg:text-base ${
              pathname === "/aboutus" && "border border-grey-15 rounded-lg"
            }`}
            href="/aboutus"
          >
            About Us
          </Link>
          <Link
            className={`px-5 py-3 lg:px-6 text-sm lg:text-base ${
              pathname === "/properties" && "border border-grey-15 rounded-lg"
            }`}
            href="properties"
          >
            Properties
          </Link>
          <Link
            className={`px-5 py-3 lg:px-6 text-sm lg:text-base ${
              pathname === "/services" && "border border-grey-15 rounded-lg"
            }`}
            href="services"
          >
            Services
          </Link>
        </nav>

        <Link
          className="hidden md:flex px-5 py-3 lg:px-6 text-sm lg:text-base border border-grey-15 rounded-lg"
          href=""
        >
          Contact Us
        </Link>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <MdMenu className="md:hidden text-lg" />
        </button>
      </header>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-20 text-white w-full flex items-center justify-center z-10 font-medium md:hidden`}
      >
        <Link
          className={`px-5 py-3 lg:px-6 text-sm lg:text-lg ${
            pathname === "/" && "border border-grey-15 rounded-lg"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`px-5 py-3 lg:px-6 text-sm lg:text-lg ${
            pathname === "/aboutus" && "border border-grey-15 rounded-lg"
          }`}
          href="aboutus"
        >
          About Us
        </Link>
        <Link
          className={`px-5 py-3 lg:px-6 text-sm lg:text-lg ${
            pathname === "/properties" && "border border-grey-15 rounded-lg"
          }`}
          href="properties"
        >
          Properties
        </Link>
        <Link
          className={`px-5 py-3 lg:px-6 text-sm lg:text-lg ${
            pathname === "/services" && "border border-grey-15 rounded-lg"
          }`}
          href="services"
        >
          Services
        </Link>
      </nav>
    </>
  );
};

export { Header };
