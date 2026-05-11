import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSev6FRADYYJdTqHPqzr9mQHNY0zpTdih8cTobYsOlZ7ceinrg/viewform?usp=dialog";

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
            <div className="inline-flex items-center gap-2 rounded-full text-[11px] font-bold mb-5 bg-white/15 text-white px-3 py-[6px] tracking-[1.2px]">
              MVP EM VALIDAÇÃO
            </div>
            <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-none text-white text-[clamp(32px,7vw,60px)]">
              Ainda não estamos
              <br />
              nas lojas.
            </h2>
            <p className="text-[17px] text-white/85 mt-[18px] leading-[1.5]">
              O Menor Feira é um MVP em validação com usuários reais. Responda
              um formulário rápido e ajude a moldar o app — você entra na lista
              dos primeiros a testar quando lançarmos.
            </p>
            <div className="flex flex-wrap gap-3 mt-[30px]">
              <motion.a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="no-underline bg-white text-ink! px-[22px] py-[15px] rounded-2xl font-bold text-[15px] inline-flex items-center gap-2.5"
              >
                Responder formulário
                <ArrowRightIcon color="var(--color-ink)" size={16} />
              </motion.a>
            </div>
            <p className="text-[13px] text-white/70 mt-4 leading-[1.5]">
              Leva menos de 2 minutos. Sem cadastro, sem compromisso.
            </p>
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
