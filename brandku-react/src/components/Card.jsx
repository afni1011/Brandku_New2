import { useEffect, useState } from "react";

const Card = ({ id, icon, title, description }) => {
  const [jumlahSuka, setJumlahSuka] = useState(() => {
    const saved = localStorage.getItem(`suka-${id}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`suka-${id}`, jumlahSuka);
  }, [jumlahSuka, id]);

  return (
    <article className="min-h-[198px] rounded-[18px] bg-white px-[22px] py-[24px] border border-slate-100 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
      <div className="mb-[18px] text-[30px] leading-none">
        {icon}
      </div>

      <h3 className="mb-[12px] text-[17px] font-extrabold text-slate-950">
        {title}
      </h3>

      <p className="text-[14px] leading-[1.65] text-slate-700">
        {description}
      </p>

      <button
        type="button"
        onClick={() => setJumlahSuka((abc) => abc + 1)}
        className="mt-4 rounded-lg bg-pink-100 px-4 py-2 text-[14px] font-semibold text-pink-600 transition hover:bg-pink-200"
      >
        ❤️ Suka ({jumlahSuka})
      </button>
    </article>
  );
};

export default Card;