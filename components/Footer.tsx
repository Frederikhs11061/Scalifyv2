export default function Footer() {
  return (
    <footer className="border-t border-[#e5ddd2] px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#7a6f65] text-xs bg-[#f2ede6]">
      <span className="font-playfair text-sm font-bold text-[#1a1612]">Scalify</span>
      <span>© {new Date().getFullYear()} Scalify · CRO & E-commerce · Viborg</span>
      <a href="mailto:frederik.hs@live.dk" className="hover:text-[#1a1612] transition-colors">frederik.hs@live.dk</a>
    </footer>
  );
}
