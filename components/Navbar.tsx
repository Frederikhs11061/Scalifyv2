"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Anbefalinger" },
  { href: "#about", label: "Om os" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 transition-all duration-300 ${
        scrolled ? "bg-[#faf8f5]/90 backdrop-blur-md shadow-sm border-b border-[#e5ddd2]" : "bg-transparent"
      }`}
    >
      <a href="#" className="font-playfair text-xl font-bold text-[#1a1612] tracking-tight">
        Scalify
      </a>
      <ul className="hidden md:flex gap-8 list-none items-center">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[#7a6f65] text-sm hover:text-[#1a1612] transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-[#1d4ed8] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#1e40af] transition-colors duration-200"
          >
            Ræk ud →
          </a>
        </li>
      </ul>
    </nav>
  );
}
