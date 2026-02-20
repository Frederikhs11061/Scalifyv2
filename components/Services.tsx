const services = [
  {
    icon: "📈",
    title: "CRO Analyse & Audit",
    desc: "Grundig gennemgang af din webshop med fokus på brugeradfærd og konverteringsbarrierer. Du får konkrete, prioriterede anbefalinger du kan gå i gang med samme dag.",
    tag: "Mest populær",
  },
  {
    icon: "💻",
    title: "Webudvikling",
    desc: "Udvikling og optimering af webshops med fokus på performance og brugeroplevelse. Erfaring med Shopify, leverandørsystemer og digitale markedsføringsværktøjer.",
    tag: null,
  },
  {
    icon: "🧭",
    title: "Digital Strategi",
    desc: "Hjælp til at fange forbrugeren tidligt i kunderejsen. Vi kortlægger din digitale tilstedeværelse og bygger en strategi der skaber vækst på lang sigt.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-8 md:px-16 py-24 bg-[#f2ede6]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#e8621a] text-sm font-medium mb-3">Hvad jeg tilbyder</p>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold text-[#1a1612] mb-4">
          Services
        </h2>
        <p className="text-[#7a6f65] text-lg max-w-xl mb-14">
          Uanset hvor du er i din e-commerce rejse, har jeg en løsning der passer til dig.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e5ddd2] hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative"
            >
              {s.tag && (
                <span className="absolute top-6 right-6 bg-[#e8f0fe] text-[#1d4ed8] text-xs font-medium px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-lg font-semibold text-[#1a1612] mb-3">{s.title}</h3>
              <p className="text-[#7a6f65] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
