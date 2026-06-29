import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Beranda",
      to: "/",
    },
    {
      label: "Tentang",
      to: "/tentang",
    },
    {
      label: "Harga",
      to: "/harga",
    },
  ];

  return (
    <header className="relative border-b border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex h-[42px] items-center justify-between px-[18px]">
        <h1 className="text-[18px] font-bold text-blue-600">
          BrandKu
        </h1>

        <nav className="hidden items-center gap-[24px] text-[14px] font-normal text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-2xl text-slate-700 md:hidden"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-3 border-t border-gray-100 bg-white px-[18px] py-4 text-center text-[14px] font-normal text-slate-700 shadow-sm md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className="w-full transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;