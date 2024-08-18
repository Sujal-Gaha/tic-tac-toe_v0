"use client";

import { iconLinks } from "@/constants/iconLinks";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 h-20 w-full bg-black flex items-center justify-between py-8 px-2 lg:px-40 text-white">
      <h1 className="text-4xl font-bold">Sujal</h1>
      <div className="hidden sm:flex items-center gap-6 text-white">
        {iconLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            className="text-3xl hover:text-[#FF577F]"
          >
            {link.icon}
          </Link>
        ))}
        <Link href="#" className="text-lg hover:text-[#FF577F]">
          Blog
        </Link>
        <Link href="#">
          <Button variant="contact">Contact</Button>
        </Link>
      </div>
    </nav>
  );
};
