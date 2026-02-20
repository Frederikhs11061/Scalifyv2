const tags = [
  "Shopify", "CRO", "Webudvikling", "UX Design",
  "E-commerce", "Digital Strategi", "Konverteringsoptimering",
];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 py-24 bg-[#f2ede6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="text-[#e8621a] text-sm font-medium mb-3">Om mig</p>
            <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold text-[#1a1612] mb-6">
              Jeg brænder for<br />din vækst online
            </h2>
            <p className="text-[#4a4037] leading-relaxed mb-4">
              Med baggrund som tidligere ejer af en Shopify-webshop ved jeg præcis, hvilke udfordringer du møder som e-commerce ejer. Jeg har selv stået med de samme problemer — og fundet løsningerne.
            </p>
            <p className="text-[#7a6f65] leading-relaxed mb-8">
              Jeg er baseret i Viborg og arbejder med kunder over hele landet. Mit mål er enkelt: at give dig konkrete, brugbare løsninger — ikke lange rapporter der samler støv.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-[#faf8f5] border border-[#e5ddd2] text-[#7a6f65] text-xs rounded-full hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#1d4ed8] text-sm font-medium hover:gap-3 transition-all duration-200"
            >
              Lad os snakke →
            </a>
          </div>

          {/* Right: card */}
          <div className="relative">
            <div className="bg-[#faf8f5] rounded-2xl border border-[#e5ddd2] p-10 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#1d4ed8] flex items-center justify-center text-white font-playfair text-2xl font-bold mb-6">
                S
              </div>
              <div className="font-playfair text-2xl font-bold text-[#1a1612] mb-1">Scalify</div>
              <div className="text-[#7a6f65] text-sm mb-6">📍 Viborg, Danmark</div>

              <div className="space-y-3">
                {[
                  "✓ Gratis indledende samtale",
                  "✓ Konkrete anbefalinger fra dag 1",
                  "✓ Stoppede ikke før du er tilfreds",
                  "✓ Erfaring fra egen webshop",
                ].map((item) => (
                  <div key={item} className="text-sm text-[#4a4037] flex items-center gap-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#e8621a] text-white text-xs font-medium px-5 py-3 rounded-full shadow-lg">
              🏆 4+ tilfredse kunder
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
