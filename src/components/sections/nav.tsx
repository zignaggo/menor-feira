export function LPNav() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b border-rule"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 93%, transparent)",
      }}
    >
      <div className="flex items-center justify-between mx-auto px-[22px] py-3.5 max-w-[1180px]">
        <div className="flex items-center gap-2.5">
          <div className="w-[30px] h-[30px] rounded-lg bg-blue text-white flex items-center justify-center font-extrabold text-[13px] tracking-[-0.5px]">
            MF
          </div>
          <div className="font-extrabold text-base tracking-[-0.3px]">
            Menor Feira
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-7">
          <a
            href="#como-funciona"
            className="text-ink no-underline text-sm font-semibold hover:text-blue transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#privacidade"
            className="text-ink no-underline text-sm font-semibold hover:text-blue transition-colors"
          >
            Privacidade
          </a>
          <a
            href="#parceiros"
            className="text-ink no-underline text-sm font-semibold hover:text-blue transition-colors"
          >
            Parceiros
          </a>
        </div>

        <a
          href="#baixar"
          className="bg-blue text-white! font-bold no-underline whitespace-nowrap rounded-full text-[13px] px-3.5 py-2.5 sm:text-sm sm:px-[18px] sm:py-3 hover:opacity-90 transition-opacity"
        >
          Baixar grátis
        </a>
      </div>
    </nav>
  );
}
