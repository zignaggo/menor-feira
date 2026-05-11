import { motion } from "motion/react";

const steps = [
  { t: "Você envia", d: "Sua lista com itens e quantidades." },
  {
    t: "A rede calcula",
    d: "Soma os preços de cada filial, internamente, sem expor a tabela.",
  },
  { t: "Você recebe", d: "Apenas o total e a comparação entre unidades." },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function LPPrivacy() {
  return (
    <section
      id="privacidade"
      className="py-[70px] px-[22px] bg-ink text-white"
    >
      <div className="mx-auto grid gap-7 max-w-[1180px] lg:grid-cols-[1.1fr_1fr] lg:gap-[60px] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <div className="text-[11px] tracking-[2px] font-bold text-[#a8a59c] mb-4">
            PRIVACIDADE
          </div>
          <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-[1.05] text-white text-[clamp(32px,7vw,60px)]">
            Mostramos só o
            <br />
            <span className="text-blue">total.</span> Os preços individuais
            ficam com o mercado.
          </h2>
          <p className="text-base leading-[1.55] text-[#c4c2b9] mt-[22px] max-w-[520px]">
            O Menor Feira tem acordo com cada rede parceira para somar sua
            lista internamente e devolver apenas o subtotal por filial. Você
            ganha a comparação. O mercado preserva sua estratégia de
            precificação.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
        >
          {steps.map((s, i) => (
            <div
              key={s.t}
              className={
                "flex gap-3.5 py-[18px] " +
                (i < 2 ? "border-b border-[#2a2724]" : "")
              }
            >
              <div className="w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <div className="text-base font-extrabold text-white">
                  {s.t}
                </div>
                <div className="text-sm text-[#a8a59c] mt-1 leading-[1.5]">
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
