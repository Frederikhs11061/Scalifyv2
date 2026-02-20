export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 relative overflow-hidden">

      {/* Warm background blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,98,26,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-[#e8f0fe] text-[#1d4ed8] text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
          CRO & E-commerce Specialist · Viborg
        </div>

        <h1 className="font-playfair text-[clamp(2.8rem,6vw,5rem)] leading-[1.1] font-bold text-[#1a1612] mb-6 tracking-tight">
          Få flere kunder til at{" "}
          <span className="relative">
            <em className="not-italic text-[#e8621a]">handle</em>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M0 6 Q50 0 100 4 Q150 8 200 2" stroke="#e8621a" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
            </svg>
          </span>{" "}
          i din webshop
        </h1>

        <p className="text-[#7a6f65] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Jeg hjælper e-commerce virksomheder med at konvertere flere besøgende til betalende kunder — gennem CRO-analyse, webudvikling og konkrete anbefalinger du kan implementere med det samme.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#contact"
            className="bg-[#1a1612] text-[#faf8f5] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2d2520] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Lad os snakke gratis →
          </a>
          <a
            href="#testimonials"
            className="text-[#7a6f65] text-sm underline underline-offset-4 hover:text-[#1a1612] transition-colors"
          >
            Se hvad kunderne siger
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap gap-8 mt-20 pt-12 border-t border-[#e5ddd2]">
        {[
          { num: "4+", label: "Tilfredse kunder" },
          { num: "CRO", label: "Konverteringsoptimering" },
          { num: "100%", label: "Dedikeret til resultater" },
        ].map((s) => (
          <div key={s.num} className="flex flex-col gap-1">
            <span className="font-playfair text-3xl font-bold text-[#1a1612]">{s.num}</span>
            <span className="text-[#7a6f65] text-xs tracking-wide">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
