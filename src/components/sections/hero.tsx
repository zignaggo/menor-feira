import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons";
import { PhoneFrame } from "@/components/phone-frame";
import { PhoneHome } from "@/components/phones";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function LPHero() {
  return (
    <section className="overflow-hidden pt-10 px-[22px] pb-[60px]">
      <div className="grid gap-10 mx-auto max-w-[1180px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <div className="inline-flex items-center gap-2 rounded-full text-xs font-bold mb-5 bg-blue-bg text-blue-dark px-3.5 py-[7px]">
            <span className="w-[7px] h-[7px] rounded-full bg-green inline-block" />
            Já em 6 redes parceiras no Nordeste
          </div>

          <h1 className="m-0 mb-2 font-extrabold tracking-[-2px] leading-[1.02] text-ink text-[clamp(44px,11vw,96px)]">
            Toda feira
            <br />
            por <span className="text-blue">menos.</span>
          </h1>

          <p className="text-[17px] leading-[1.45] text-ink2 mt-[22px] max-w-[480px]">
            Monte sua lista uma vez. O Menor Feira compara o total entre as
            filiais de Mix Matheus, GBarbosa, Extra e outras redes parceiras — e
            mostra onde sua feira sai mais barata, sem você precisar perguntar
            preço.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-7">
            <a
              href="#baixar"
              className="bg-blue text-white! px-[22px] py-[15px] rounded-2xl font-bold text-[15px] no-underline inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              Baixar grátis <ArrowRightIcon color="#fff" size={16} />
            </a>
            <a
              href="#como-funciona"
              className="bg-white text-ink border-[1.5px] border-rule px-[22px] py-[13.5px] rounded-2xl font-bold text-[15px] no-underline transition-colors hover:bg-surface2"
            >
              Como funciona
            </a>
          </div>

          <div className="flex flex-wrap gap-[22px] mt-7">
            {[
              { n: "R$ 25", l: "economia média por feira" },
              { n: "< 30 s", l: "para comparar 4 unidades" },
              { n: "100%", l: "preços individuais privados" },
            ].map((s) => (
              <div key={s.n} className="min-w-[110px]">
                <div className="text-[22px] font-extrabold tracking-[-0.6px] text-ink">
                  {s.n}
                </div>
                <div className="text-xs text-ink2 mt-0.5 max-w-[130px] leading-[1.3]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:justify-self-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
        >
          <div className="relative flex justify-center">
            <motion.div>
              <PhoneFrame>
                <PhoneHome animate />
              </PhoneFrame>
            </motion.div>
            <motion.div
              className="absolute transition-all right-[-6px] bottom-[60px] bg-white rounded-2xl px-4 py-3.5 min-w-[180px] shadow-[0_18px_40px_-12px_rgba(20,17,13,0.25)]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <div className="text-[10px] tracking-[1.5px] text-ink2 font-bold mb-1">
                MENOR TOTAL
              </div>
              <div className="text-[22px] font-extrabold text-blue tracking-[-1px]">
                R$ 287,40
              </div>
              <div className="text-[11px] text-ink2 mt-0.5">
                Mix M. Serraria · 2,1 km
              </div>
              <div className="h-1 bg-[#e8e4d6] rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: easeOut, delay: 0.3 }}
                  className="h-full w-[60%] bg-blue rounded-full origin-left"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
