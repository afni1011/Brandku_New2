import Card from "./Card";

const CardGrid = ({ features }) => {
  return (
    <section id="fitur" className="bg-white px-6 py-[46px]">
      <div className="mx-auto max-w-[790px]">
        <h2 className="mb-[30px] text-center text-[28px] font-extrabold tracking-tight text-slate-950">
          Mengapa BrandKu?
        </h2>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              shadow={feature.shadow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;