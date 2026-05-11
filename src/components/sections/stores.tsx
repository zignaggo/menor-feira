import { motion } from "motion/react";

const partners = [
  { name: "Mix Matheus", units: "14 unidades", color: "#1e7cf0" },
  { name: "GBarbosa", units: "38 unidades", color: "#e63946" },
  { name: "Extra", units: "22 unidades", color: "#d62828" },
  { name: "Atacadão", units: "11 unidades", color: "#f4a261" },
  { name: "Bompreço", units: "9 unidades", color: "#2a9d40" },
  { name: "Hiper Bom", units: "7 unidades", color: "#7b4b94" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export function LPStores() {
  return (
    <section id="parceiros" className="pt-[70px] px-[22px] pb-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-[11px] tracking-[2px] font-bold text-ink2 mb-4">
          REDES PARCEIRAS
        </div>
        <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-[1.05] text-ink text-[clamp(32px,7vw,60px)]">
          Seis redes.
          <br />
          <span className="text-ink2">Mais de 100 filiais.</span>
        </h2>
        <p className="text-[15px] text-ink2 mt-4 max-w-[540px] leading-[1.5]">
          O Menor Feira já compara sua lista entre as principais redes do
          Nordeste — e novas parcerias entram todo mês.
        </p>
        <motion.div
          className="grid gap-2.5 grid-cols-2 md:grid-cols-4 md:gap-3.5 mt-9"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={card}
              className="bg-white rounded-2xl px-5 py-[22px]"
            >
              <div
                className="w-11 h-11 rounded-xl text-white flex items-center justify-center text-base font-extrabold tracking-[-0.5px] mb-3.5"
                style={{ background: p.color }}
              >
                {p.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="text-base font-extrabold tracking-[-0.3px]">
                {p.name}
              </div>
              <div className="text-xs text-ink2 mt-1">{p.units}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
