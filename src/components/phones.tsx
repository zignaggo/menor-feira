import { motion } from "motion/react";
import {
  ArrowRightIcon,
  BackIcon,
  BellIcon,
  ChevronIcon,
  ListIcon,
  LockIcon,
  MenuIcon,
  PinIcon,
  ReceiptIcon,
  ScanIcon,
  SearchIcon,
  ShareIcon,
} from "./icons";
import { BottomNav, StatusBar } from "./phone-frame";

import arrozImg from "@/assets/arroz.png";
import bananaImg from "@/assets/banana.png";
import leiteImg from "@/assets/leite.png";

const productImages: Record<string, string> = {
  arroz: arrozImg,
  banana: bananaImg,
  leite: leiteImg,
};

const EYEBROW = "text-[11px] tracking-[1.5px] uppercase text-ink2 font-bold";

export function PhoneHome({ animate = false }: { animate?: boolean }) {
  return (
    <div className="bg-bg w-full h-full relative text-ink overflow-hidden">
      <StatusBar />

      <div className="px-[22px] bg-bg pt-1.5 pb-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
            MV
          </div>
          <div>
            <div className="text-[15px] font-bold">Marina</div>
            <div className="text-xs text-ink2">marina@gmail.com</div>
          </div>
        </div>
        <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
          <BellIcon color="var(--color-ink)" />
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-4 pb-3 bg-bg">
        <div className="text-[30px] font-extrabold tracking-[-1px] leading-[1.05]">
          Olá, Marina.
        </div>
        <div className="text-[26px] font-extrabold tracking-[-1px] leading-[1.1] text-blue mt-0.5">
          Comece sua próxima feira.
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-3 pb-1.5">
        <div className={EYEBROW + " mb-2.5"}>LISTA ATIVA</div>
        <div className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-surface2 flex items-center justify-center">
            <ListIcon color="var(--color-ink)" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold">Feira de maio</div>
            <div className="text-xs text-ink2 mt-0.5">
              10 produtos · 19 unidades
            </div>
          </div>
          <ChevronIcon color="var(--color-ink3)" />
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-3 pb-[18px] grid grid-cols-[1fr_110px] gap-2">
        <motion.div
          animate={
            animate
              ? {
                  boxShadow: [
                    "0 0 0 0 rgba(30,124,240,0)",
                    "0 0 0 6px rgba(30,124,240,0.18)",
                    "0 0 0 0 rgba(30,124,240,0)",
                  ],
                }
              : undefined
          }
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-blue text-white rounded-2xl p-4 flex items-center justify-between"
        >
          <div>
            <div className="text-[10px] tracking-[1.5px] uppercase opacity-75 font-bold">
              COMPARAR AGORA
            </div>
            <div className="text-[15px] font-extrabold mt-1 leading-[1.15]">
              6 redes parceiras
              <br />
              perto de você
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white text-blue flex items-center justify-center flex-shrink-0">
            <ArrowRightIcon color="var(--color-blue)" size={14} />
          </div>
        </motion.div>
        <div className="bg-white rounded-2xl py-3.5 text-center border-[1.5px] border-blue">
          <div className="flex justify-center text-blue mb-1">
            <ScanIcon color="var(--color-blue)" />
          </div>
          <div className="text-[11px] font-bold text-blue tracking-wider">
            ESCANEAR
          </div>
        </div>
      </div>

      <div className="pb-3.5">
        <div className={EYEBROW + " px-[22px] bg-bg pb-2.5"}>REDES PRÓXIMAS</div>
        <div className="flex gap-2 overflow-hidden px-[22px] bg-bg">
          {[
            { name: "Mix Matheus", d: "2,1 km" },
            { name: "GBarbosa", d: "3,4 km" },
            { name: "Extra", d: "5,7 km" },
          ].map((s, i) => (
            <div
              key={s.name}
              className="flex-1 min-w-0 bg-white rounded-2xl p-3"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green" />
                <div className="text-[10px] text-green font-bold tracking-[0.5px]">
                  {i === 2 ? "AB…" : "ABERTO"}
                </div>
              </div>
              <div className="text-[13px] font-extrabold leading-[1.15] whitespace-nowrap overflow-hidden text-ellipsis">
                {s.name}
              </div>
              <div className="text-[11px] text-ink2 mt-0.5">{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-1 pb-[90px]">
        <div className={EYEBROW + " mb-2.5"}>SUAS LISTAS</div>
        {[
          { n: "Café da manhã", c: 7 },
          { n: "Churrasco · sábado", c: 14 },
          { n: "Limpeza geral", c: 5 },
        ].map((l) => (
          <div
            key={l.n}
            className="bg-white rounded-2xl px-3.5 py-3 flex items-center gap-3 mb-2"
          >
            <div className="w-[38px] h-[38px] rounded-[10px] bg-surface2 flex items-center justify-center">
              <ReceiptIcon color="var(--color-ink)" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-extrabold">{l.n}</div>
              <div className="text-xs text-ink2 mt-px">{l.c} produtos</div>
            </div>
            <ChevronIcon color="var(--color-ink3)" />
          </div>
        ))}
      </div>

      <BottomNav active="home" />
    </div>
  );
}

export function PhoneResult({ animate = false }: { animate?: boolean }) {
  const stores = [
    {
      name: "Mix M. Serraria",
      addr: "Mix Matheus · 2,1 km",
      total: 287.4,
      pct: 60,
      best: true,
    },
    {
      name: "GBarbosa Farol",
      addr: "GBarbosa · 3,4 km",
      total: 294.85,
      pct: 72,
      best: false,
    },
    {
      name: "Extra Jacintinho",
      addr: "Extra · 5,7 km",
      total: 301.21,
      pct: 80,
      best: false,
    },
    {
      name: "Atacadão Sumaré",
      addr: "Atacadão · 4,2 km",
      total: 321.13,
      pct: 96,
      best: false,
      miss: 2,
    },
  ];
  return (
    <div className="bg-bg w-full h-full relative text-ink overflow-hidden">
      <StatusBar />
      <div className="flex items-center justify-between px-[18px] h-11">
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <BackIcon color="var(--color-ink)" />
        </div>
        <div className="text-[11px] tracking-[2px] font-bold text-ink2">
          RESULTADO
        </div>
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <ShareIcon color="var(--color-ink)" />
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-3.5 pb-1.5">
        <div className={EYEBROW + " mb-1.5"}>MENOR CUSTO TOTAL</div>
        <motion.div
          initial={animate ? { opacity: 0, y: 8, scale: 0.96 } : false}
          animate={animate ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[52px] font-extrabold tracking-[-2.5px] leading-[0.95] text-blue"
        >
          R$&nbsp;287,40
        </motion.div>
        <div className="text-sm text-ink mt-3">
          em <b>Mix M. Serraria</b>
        </div>
        <div className="text-[13px] text-ink2 mt-0.5">
          Você economiza até{" "}
          <span className="text-blue font-bold">R$ 25,15</span> escolhendo
          esta unidade.
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-[18px] pb-1">
        <div className={EYEBROW + " mb-3"}>COMPARATIVO</div>
        {stores.map((s) => (
          <div
            key={s.name}
            className={
              "bg-white rounded-2xl px-3.5 py-3 mb-2 border-[1.5px] " +
              (s.best ? "border-blue" : "border-transparent")
            }
          >
            <div className="flex items-baseline justify-between mb-2">
              <div className="min-w-0 flex-1">
                <div className="text-sm font-extrabold flex items-center gap-2">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {s.name}
                  </span>
                  {s.best && (
                    <span className="text-[10px] px-2 py-[3px] rounded-full bg-blue text-white tracking-wider font-bold flex-shrink-0">
                      MELHOR
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-ink2 mt-[3px]">
                  {s.addr}
                  {s.miss && (
                    <span className="text-red ml-1">
                      · {s.miss} itens em falta
                    </span>
                  )}
                </div>
              </div>
              <div
                className={
                  "text-[15px] font-extrabold tracking-[-0.5px] ml-2 " +
                  (s.best ? "text-blue" : "text-ink")
                }
              >
                R$&nbsp;{s.total.toFixed(2).replace(".", ",")}
              </div>
            </div>
            <div className="h-1.5 bg-[#e8e4d6] rounded-full overflow-hidden">
              <motion.div
                initial={animate ? { scaleX: 0 } : false}
                animate={animate ? { scaleX: 1 } : undefined}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "h-full rounded-full origin-left " +
                  (s.miss ? "bg-red" : "bg-blue")
                }
                style={{ width: s.pct + "%" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="px-[22px] bg-bg pb-3 flex items-start gap-2">
        <div className="mt-0.5">
          <LockIcon color="var(--color-ink2)" />
        </div>
        <div className="text-[11px] text-ink2 leading-[1.45]">
          Mostramos somente o total por unidade. Os preços individuais
          permanecem privados, conforme acordo com a rede parceira.
        </div>
      </div>

      <div className="px-[18px] pt-1 pb-5">
        <div className="bg-blue text-white rounded-2xl px-4.5 py-[15px] text-[15px] font-bold text-center flex items-center justify-center gap-2">
          <PinIcon color="#fff" /> Ir para Mix M. Serraria
        </div>
      </div>
    </div>
  );
}

export function PhoneList() {
  const groups = [
    {
      cat: "MERCEARIA",
      items: [
        {
          n: "Arroz branco",
          s: "Tio João · 5 kg",
          q: 1,
          imgId: "arroz",
          color: "#d4b78a",
        },
        {
          n: "Banana",
          s: "Nanica · 1kg",
          q: 1,
          imgId: "banana",
          color: "#e8d36b",
        },
        {
          n: "Leite integral",
          s: "Itambé · 1 L",
          q: 6,
          imgId: "leite",
          color: "#cfe2f3",
        },
      ],
    },
    {
      cat: "HORTIFRUTI",
      items: [
        {
          n: "Banana",
          s: "Nanica · 1kg",
          q: 1,
          imgId: "banana",
          color: "#e8d36b",
        },
      ],
    },
    {
      cat: "LATICÍNIOS",
      items: [
        {
          n: "Leite integral",
          s: "Itambé · 1 L",
          q: 6,
          imgId: "leite",
          color: "#cfe2f3",
        },
      ],
    },
  ];

  return (
    <div className="bg-bg w-full h-full relative text-ink overflow-hidden">
      <StatusBar />
      <div className="flex items-center justify-between px-[18px] h-11">
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <BackIcon color="var(--color-ink)" />
        </div>
        <div className="text-[11px] tracking-[2px] font-bold text-ink2">
          MINHA LISTA
        </div>
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <MenuIcon color="var(--color-ink)" />
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-3 pb-2">
        <div className="text-[36px] font-extrabold tracking-[-1.5px] leading-[1.05]">
          Feira de maio
        </div>
        <div className="text-[13px] text-ink2 mt-1">
          10 produtos · 19 unidades
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-2.5 pb-4">
        <div className="bg-blue text-white rounded-2xl px-4.5 py-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[1.5px] uppercase opacity-75 font-bold">
              PRONTO PARA COMPARAR
            </div>
            <div className="text-base font-extrabold mt-1 leading-[1.15]">
              4 redes parceiras
              <br />
              perto de você
            </div>
          </div>
          <div className="w-[34px] h-[34px] rounded-full bg-white text-blue flex items-center justify-center flex-shrink-0">
            <ArrowRightIcon color="var(--color-blue)" size={14} />
          </div>
        </div>
      </div>

      <div className="px-[22px] bg-bg pb-1 flex items-center justify-between">
        <div className={EYEBROW}>PRODUTOS</div>
        <div className="bg-blue text-white text-xs font-bold px-3 py-1.5 rounded-full">
          + Adicionar
        </div>
      </div>

      <div className="px-[22px] bg-bg pt-3">
        <div className="bg-white rounded-2xl px-3.5 py-3 flex items-center gap-2.5">
          <SearchIcon color="var(--color-ink2)" />
          <div className="text-[13px] text-ink2">Buscar produtos</div>
        </div>
      </div>

      {groups.map((g) => (
        <div key={g.cat} className="px-[22px] bg-bg pt-3 pb-1">
          <div className="text-[11px] tracking-[1.5px] text-ink2 font-bold mb-2">
            {g.cat}
          </div>
          {g.items.map((it) => {
            const img = it.imgId ? productImages[it.imgId] : undefined;
            return (
              <div
                key={it.n}
                className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2.5 mb-1.5"
              >
                <div
                  className="w-[38px] h-[38px] rounded-lg flex-shrink-0"
                  style={{
                    background: img
                      ? `url(${img}) center/cover no-repeat, ${it.color}`
                      : it.color,
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-extrabold">{it.n}</div>
                  <div className="text-[11px] text-ink2">{it.s}</div>
                </div>
                <div className="flex items-center bg-surface2 rounded-full px-1.5">
                  <div className="w-[22px] h-[26px] flex items-center justify-center text-ink2">
                    −
                  </div>
                  <div className="min-w-[14px] text-center text-xs font-bold">
                    {it.q}
                  </div>
                  <div className="w-[22px] h-[26px] flex items-center justify-center text-blue">
                    +
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
