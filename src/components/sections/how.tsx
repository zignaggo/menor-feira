import type { ComponentType } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PhoneFrame } from "@/components/phone-frame";
import { PhoneHome, PhoneList, PhoneResult } from "@/components/phones";

type Step = {
  n: string;
  t: string;
  d: string;
  Phone: ComponentType<{ animate?: boolean }>;
};

const steps: Step[] = [
  {
    n: "01",
    t: "Monte sua lista",
    d: "Adicione tudo que você precisa — arroz, leite, banana, café. Salve listas que você refaz toda semana.",
    Phone: PhoneList,
  },
  {
    n: "02",
    t: "Toque em comparar",
    d: "O Menor Feira calcula o total da sua lista em todas as redes parceiras ao mesmo tempo — Mix Matheus, GBarbosa, Extra e mais.",
    Phone: PhoneHome,
  },
  {
    n: "03",
    t: "Vá pra mais barata",
    d: "Veja o total por filial, a economia versus a mais cara, e até quais itens estão em falta. Pronto.",
    Phone: PhoneResult,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function HowRow({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reversed = index % 2 === 1;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, ease: easeOut, delay: index * 0.15 }}
      className="grid gap-8 items-center py-8 lg:py-12 lg:gap-20 lg:grid-cols-2 border-b border-[rgba(20,17,13,0.08)] last:border-b-0"
    >
      <div className={"min-w-0 " + (reversed ? "lg:order-2" : "")}>
        <div className="text-[48px] font-extrabold text-blue tracking-[-2px] leading-none">
          {step.n}
        </div>
        <div className="text-[26px] font-extrabold text-ink tracking-[-0.7px] mt-3 leading-[1.1]">
          {step.t}
        </div>
        <div className="text-[15px] text-ink2 mt-3 leading-[1.55] max-w-[440px]">
          {step.d}
        </div>
      </div>
      <div
        className={
          "flex justify-center " +
          (reversed ? "lg:order-1 lg:justify-start" : "lg:justify-end")
        }
      >
        <PhoneFrame scale={0.86}>
          <step.Phone animate={inView} />
        </PhoneFrame>
      </div>
    </motion.div>
  );
}

export function LPHow() {
  return (
    <section id="como-funciona" className="pt-[70px] px-[22px] pb-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-[11px] tracking-[2px] font-bold text-ink2 mb-4">
          COMO FUNCIONA
        </div>
        <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-[1.05] text-ink max-w-[720px] text-[clamp(32px,7vw,60px)]">
          Três toques entre sua lista
          <br />e a melhor filial.
        </h2>

        <div className="mt-12">
          {steps.map((s, i) => (
            <HowRow key={s.n} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
