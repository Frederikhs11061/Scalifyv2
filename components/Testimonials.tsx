const testimonials = [
  {
    text: "Tusind tak for det! Det ser rigtigt godt ud, og der er meget brugbart CRO til vores webshop. Det sætter vi kæmpe pris på — det er sådan noget der løfter vores virksomhed! Kæmpe anbefaling.",
    name: "ByMøller",
    role: "bymoller.com",
    initial: "B",
    color: "bg-blue-100 text-blue-700",
  },
  {
    text: "Vi fandt mange værdifulde indsigter. Pointerne omkring at skelne tydeligere mellem homepage og produktsider gav rigtig god mening. Vi planlægger allerede, hvordan vi fanger forbrugeren tidligere i kunderejsen.",
    name: "Frederik Møller",
    role: "Corelabs · corelabs.dk",
    initial: "F",
    color: "bg-orange-100 text-orange-700",
  },
  {
    text: "Super god oplevelse. Vi fik en meget grundig og professionel gennemgang med konkrete anbefalinger. Det er tydeligt at der er tænkt over både design, brugeroplevelse og konvertering. Kan klart anbefales.",
    name: "Rambergbrand.dk",
    role: "E-commerce",
    initial: "R",
    color: "bg-green-100 text-green-700",
  },
  {
    text: "Super seriøs og hjælpsom. Stoppede ikke før jeg var tilfreds. Kan kun anbefale hvis i søger en dedikeret person. Det er ikke sidste gang jeg søger hjælp her.",
    name: "Dennis Thøgersen",
    role: "Ejer · grisekongen.dk",
    initial: "D",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-8 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#e8621a] text-sm font-medium mb-3">Anbefalinger</p>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold text-[#1a1612] mb-4">
          Hvad kunderne siger
        </h2>
        <p className="text-[#7a6f65] text-lg max-w-xl mb-14">
          Jeg stopper ikke før du er tilfreds. Her er hvad mine kunder siger.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#faf8f5] border border-[#e5ddd2] rounded-2xl p-8 hover:shadow-md transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#e8621a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#4a4037] leading-relaxed mb-6 text-sm">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#1a1612]">{t.name}</div>
                  <div className="text-[#7a6f65] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
