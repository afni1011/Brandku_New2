const Pricing = () => {
  return (
    <section className="bg-[#eff6ff] px-6 py-[46px] text-center">
      <div className="mx-auto max-w-[790px]">
        <h2 className="mb-[14px] text-[40px] font-extrabold leading-tight tracking-tight text-slate-950">
          Harga Layanan
        </h2>

        <p className="mx-auto mb-[30px] max-w-[560px] text-[16px] leading-[1.65] text-slate-600">
          Pilih paket layanan BrandKu sesuai kebutuhan bisnismu.
        </p>

        <div className="mx-auto max-w-[360px] rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-2 text-[22px] font-bold text-blue-600">
            Paket Basic
          </h3>

          <p className="mb-4 text-[15px] leading-[1.6] text-slate-600">
            Cocok untuk bisnis kecil yang baru mulai menggunakan layanan digital.
          </p>

          <p className="text-[28px] font-extrabold text-slate-950">
            Rp99.000
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;