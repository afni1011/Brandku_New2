const Header = () => {
  return (
    <header className="h-[42px] border-b border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex h-full items-center justify-between px-[18px]">
        <h1 className="text-[18px] font-bold text-blue-600">
          BrandKu
        </h1>

        <nav className="flex items-center gap-[24px] text-[14px] font-normal text-slate-700">
          <a href="#home" className="transition hover:text-blue-600">
            Beranda
          </a>

          <a href="#fitur" className="transition hover:text-blue-600">
            Fitur
          </a>

          <a href="#harga" className="transition hover:text-blue-600">
            Harga
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;