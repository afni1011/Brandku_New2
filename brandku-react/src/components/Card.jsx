const Card = ({ icon, title, description, shadow }) => {
  return (
    <article
      className={`min-h-[198px] rounded-[12px] border border-slate-200 bg-white px-[22px] py-[24px] ${shadow}`}
    >
      <div className="mb-[18px] text-[30px] leading-none">
        {icon}
      </div>

      <h3 className="mb-[12px] text-[17px] font-extrabold text-slate-950">
        {title}
      </h3>

      <p className="text-[14px] leading-[1.65] text-slate-700">
        {description}
      </p>
    </article>
  );
};

export default Card;