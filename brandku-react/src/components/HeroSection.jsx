const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex h-[280px] items-center justify-center bg-[#eff6ff] px-6 text-center"
    >
      <div className="mx-auto max-w-[720px]">
        <h2 className="mb-[14px] text-[40px] font-extrabold leading-tight tracking-tight text-slate-950 md:text-[40px]">
          Solusi Terbaik untuk Bisnismu
        </h2>

        <p className="mx-auto mb-[26px] max-w-[520px] text-[16px] leading-[1.65] text-slate-600">
          Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan
          bisnis kecil.
        </p>

        <a
          href="#fitur"
          className="inline-flex h-[42px] items-center justify-center rounded-full bg-blue-600 px-[28px] text-[15px] font-bold text-white shadow-sm transition hover:bg-blue-700"
        >
          Mulai Gratis
        </a>
      </div>
    </section>
  );
};

export default HeroSection;