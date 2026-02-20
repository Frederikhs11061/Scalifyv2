export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#e8621a] text-sm font-medium mb-3">Kontakt</p>
        <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold text-[#1a1612] mb-4">
          Klar til at komme i gang?
        </h2>
        <p className="text-[#7a6f65] text-lg mb-10 max-w-xl mx-auto">
          Ræk ud for en gratis og uforpligtende snak om, hvordan vi kan hjælpe din webshop med at konvertere flere kunder.
        </p>

        <a
          href="mailto:frederik.hs@live.dk"
          className="inline-flex items-center gap-3 bg-[#1a1612] text-[#faf8f5] px-10 py-5 rounded-full text-base font-medium hover:bg-[#2d2520] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 mb-8"
        >
          📧 frederik.hs@live.dk
        </a>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/frederik-simonsen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a6f65] text-sm hover:text-[#1d4ed8] transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>

        {/* Trust signal */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-[#7a6f65] text-xs">
          <span>✓ Gratis indledende samtale</span>
          <span>✓ Svar inden 24 timer</span>
          <span>✓ Ingen binding</span>
        </div>
      </div>
    </section>
  );
}
