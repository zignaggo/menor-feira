import { motion } from "motion/react";

const items = [
  {
    n: "01",
    t: "Mesmos produtos, preços diferentes.",
    d: "Cada unidade tem custos próprios — arroz, leite, café variam de filial para filial sem aviso.",
  },
  {
    n: "02",
    t: "Comparar a pé leva horas.",
    d: "Ligar pra cada loja, percorrer corredores, anotar tudo — feira vira projeto.",
  },
  {
    n: "03",
    t: "Mercados não publicam preços.",
    d: "A maioria das redes não expõe a tabela completa online. Você só descobre no caixa.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export function LPProblem() {
  return (
    <section className="pt-[60px] px-[22px] pb-[30px] bg-white">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[720px]">
          <div className="text-[11px] tracking-[2px] font-bold text-ink2 mb-4">
            O PROBLEMA
          </div>
          <h2 className="m-0 font-extrabold tracking-[-1.2px] leading-[1.05] text-ink text-[clamp(32px,7vw,60px)]">
            Você nunca sabe
            <br />
            <span className="text-ink2">em qual filial</span> sua feira está
            mais barata.
          </h2>
        </div>

        <motion.div
          className="grid gap-3 md:gap-4 md:grid-cols-3 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((p) => (
            <motion.div
              key={p.n}
              variants={cardVariants}
              className="bg-bg rounded-[20px] p-6"
            >
              <div className="text-[13px] font-extrabold text-blue tracking-wider mb-3.5">
                {p.n}
              </div>
              <div className="text-[17px] font-extrabold text-ink tracking-[-0.3px] leading-[1.2]">
                {p.t}
              </div>
              <div className="text-sm text-ink2 mt-2 leading-[1.5]">
                {p.d}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
