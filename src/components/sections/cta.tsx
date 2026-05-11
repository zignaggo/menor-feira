import { motion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function LPCTA() {
  return (
    <section id="baixar" className="pt-[60px] px-[22px] pb-[30px]">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="bg-blue text-white rounded-[28px] relative overflow-hidden px-[clamp(28px,5vw,56px)] py-[clamp(36px,6vw,64px)]"
        >
          <div className="absolute right-[-80px] top-[-80px] w-[280px] h-[280px] rounded-full bg-white/[0.06]" />
          <div className="absolute right-10 bottom-[-120px] w-[320px] h-[320px] rounded-full bg-white/[0.06]" />
          <div className="relative max-w-[640px]">
            <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-none text-white text-[clamp(32px,7vw,60px)]">
              Sua próxima feira
              <br />
              vai ser a mais barata.
            </h2>
            <p className="text-[17px] text-white/85 mt-[18px] leading-[1.5]">
              Grátis. Sem cadastro de cartão. Em todas as redes parceiras.
            </p>
            <div className="flex flex-wrap gap-3 mt-[30px]">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="no-underline bg-white text-ink! px-5 py-3 rounded-xl flex items-center gap-3"
              >
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="var(--color-ink)"
                >
                  <path d="M19.4 14.5c0-3.2 2.6-4.7 2.7-4.8-1.5-2.2-3.8-2.5-4.6-2.5-2-.2-3.8 1.1-4.8 1.1s-2.5-1.1-4.1-1c-2.1 0-4 1.2-5.1 3.1-2.2 3.8-.6 9.3 1.6 12.4 1.1 1.5 2.3 3.1 4 3 1.6-.1 2.2-1 4.1-1s2.5 1 4.2 1c1.7 0 2.8-1.5 3.9-3 1.2-1.7 1.7-3.4 1.7-3.5-.1 0-3.3-1.3-3.3-5z M16.4 5c.9-1.1 1.5-2.6 1.3-4-1.3.1-2.8.9-3.7 2-.8 1-1.6 2.5-1.4 4 1.4.1 2.9-.7 3.8-2z" />
                </svg>
                <div>
                  <div className="text-[10px] opacity-70">Baixar na</div>
                  <div className="text-sm font-extrabold">App Store</div>
                </div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="no-underline bg-white text-ink! px-5 py-3 rounded-xl inline-flex items-center gap-3"
              >
                <svg width="22" height="24" viewBox="0 0 22 24">
                  <path
                    d="M2 1l11 11L2 23M2 1c-.5.3-1 .8-1 1.4v19.2c0 .6.5 1.1 1 1.4M2 1l16 9.5L13 12M2 23l16-9.5L13 12"
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <div className="text-[10px] opacity-70">Disponível em</div>
                  <div className="text-sm font-extrabold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function LPFooter() {
  return (
    <footer className="px-[22px] pt-[30px] pb-[50px]">
      <div className="mx-auto max-w-[1180px] flex items-center justify-between gap-5 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-blue text-white flex items-center justify-center font-extrabold text-[10px]">
            MF
          </div>
          <div className="text-[13px] text-ink2">
            © 2026 Menor Feira · Comparação de feira entre redes
          </div>
        </div>
        <div className="flex gap-[22px]">
          <a
            href="#"
            className="no-underline hover:text-ink transition-colors text-[13px] text-ink2"
          >
            Privacidade
          </a>
          <a
            href="#"
            className="no-underline hover:text-ink transition-colors text-[13px] text-ink2"
          >
            Termos
          </a>
          <a
            href="#"
            className="no-underline hover:text-ink transition-colors text-[13px] text-ink2"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
