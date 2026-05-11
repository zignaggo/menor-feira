import { useEffect, useRef, useState } from "react";
import {
  animate as motionAnimate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import { LockIcon } from "@/components/icons";

type Bar = {
  n: string;
  sub: string;
  total: number;
  pct: number;
  best?: boolean;
  miss?: number;
};

const bars: Bar[] = [
  { n: "Mix M. Serraria", sub: "Mix Matheus", total: 287.4, pct: 60, best: true },
  { n: "GBarbosa Farol", sub: "GBarbosa", total: 294.85, pct: 72 },
  { n: "Extra Jacintinho", sub: "Extra", total: 301.21, pct: 80 },
  { n: "Atacadão Sumaré", sub: "Atacadão", total: 312.55, pct: 96, miss: 2 },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function AnimatedNumber({
  target,
  active,
  duration = 1.6,
}: {
  target: number;
  active: boolean;
  duration?: number;
}) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0,00");
  useMotionValueEvent(mv, "change", (v) => {
    setDisplay(v.toFixed(2).replace(".", ","));
  });
  useEffect(() => {
    if (!active) return;
    const controls = motionAnimate(mv, target, {
      duration,
      ease: easeOut,
    });
    return () => controls.stop();
  }, [active, target, duration, mv]);
  return <>{display}</>;
}

export function LPReveal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section
      ref={ref}
      className="pt-[70px] px-[22px] pb-20 bg-[linear-gradient(180deg,var(--color-bg)_0%,#e8e4d6_100%)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="text-[11px] tracking-[2px] font-bold text-ink2 mb-4">
            O RESULTADO
          </div>
          <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-[1.05] text-ink text-[clamp(32px,7vw,60px)]">
            Sua lista. Quatro filiais.
            <br />
            <span className="text-blue">Um número.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: easeOut }}
            className="bg-white rounded-3xl px-7 py-8 shadow-[0_30px_60px_-28px_rgba(20,17,13,0.2)]"
          >
            <div className="text-[11px] tracking-[1.5px] text-ink2 font-bold mb-2.5">
              MENOR CUSTO TOTAL
            </div>
            <div className="font-extrabold text-blue tracking-[-3.5px] leading-[0.95] text-[clamp(56px,12vw,88px)]">
              R$&nbsp;
              <AnimatedNumber target={287.4} active={inView} />
            </div>
            <div className="text-base text-ink mt-4">
              em <b>Mix M. Serraria</b> · Mix Matheus · 2,1 km
            </div>
            <div className="text-sm text-ink2 mt-1.5">
              Você economiza{" "}
              <span className="text-blue font-bold">
                R$ <AnimatedNumber target={25.15} active={inView} />
              </span>{" "}
              versus a mais cara.
            </div>
            <div className="h-px bg-rule my-6" />
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5">
                <LockIcon color="var(--color-ink2)" />
              </div>
              <div className="text-xs text-ink2 leading-[1.5]">
                Mostramos somente o total por unidade. Os preços individuais
                permanecem privados, conforme acordo com a rede parceira.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="text-[11px] tracking-[1.5px] text-ink2 font-bold mb-3.5">
              COMPARATIVO ENTRE FILIAIS
            </div>
            {bars.map((s, i) => (
              <div
                key={s.n}
                className={
                  "bg-white rounded-2xl px-4 py-3.5 mb-2 border-[1.5px] " +
                  (s.best ? "border-blue" : "border-transparent")
                }
              >
                <div className="flex items-baseline justify-between mb-2.5">
                  <div>
                    <div className="text-sm font-extrabold flex items-center gap-2">
                      {s.n}
                      {s.best && (
                        <span className="text-[10px] px-2 py-[3px] rounded-full bg-blue text-white tracking-wider font-bold">
                          MELHOR
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-ink2 mt-0.5">
                      {s.sub}
                      {s.miss ? (
                        <span className="text-red">
                          {" "}· {s.miss} itens em falta
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div
                    className={
                      "text-[15px] font-extrabold tracking-[-0.4px] " +
                      (s.best ? "text-blue" : "text-ink")
                    }
                  >
                    R$&nbsp;{s.total.toFixed(2).replace(".", ",")}
                  </div>
                </div>
                <div className="h-1.5 bg-[#e8e4d6] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={inView ? { width: s.pct + "%" } : undefined}
                    transition={{
                      duration: 1.1,
                      ease: easeOut,
                      delay: 0.3 + i * 0.12,
                    }}
                    className={
                      "h-full rounded-full " +
                      (s.miss ? "bg-red" : "bg-blue")
                    }
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
