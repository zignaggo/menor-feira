import type { CSSProperties, ReactNode } from "react";
import {
  HomeIcon,
  ListSquareIcon,
  MapIcon,
  SearchIcon,
} from "./icons";

type PhoneFrameProps = {
  children: ReactNode;
  scale?: number;
  style?: CSSProperties;
};

export function PhoneFrame({ children, scale = 1, style }: PhoneFrameProps) {
  return (
    <div
      className="bg-black flex-shrink-0 shadow-[0_30px_80px_-20px_rgba(20,17,13,0.35),0_8px_24px_-8px_rgba(20,17,13,0.18)]"
      style={{
        width: 320 * scale,
        height: 656 * scale,
        borderRadius: 44 * scale,
        padding: 8 * scale,
        ...style,
      }}
    >
      <div
        className="w-full h-full overflow-hidden relative"
        style={{ borderRadius: 36 * scale }}
      >
        <div
          className="origin-top-left"
          style={{
            width: 310,
            height: 656,
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const colorClass = dark ? "text-white" : "text-ink";
  const c = dark ? "#fff" : "var(--color-ink)";
  return (
    <div
      className={
        "h-[50px] bg-bg flex items-center justify-between px-[26px] text-base font-bold relative " +
        colorClass
      }
    >
      <div>9:41</div>
      <div className="bg-black absolute left-1/2 -translate-x-1/2 top-3 w-[110px] h-[34px] rounded-full" />
      <div className="flex items-center gap-1.5">
        <svg width="18" height="11" viewBox="0 0 18 11">
          <g fill={c}>
            <rect x="0" y="7" width="3" height="4" rx="0.6" />
            <rect x="5" y="5" width="3" height="6" rx="0.6" />
            <rect x="10" y="3" width="3" height="8" rx="0.6" />
            <rect x="15" y="0" width="3" height="11" rx="0.6" />
          </g>
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path
            d="M8 9.5l1 1.2 1-1.2M3 5.5A8 8 0 0 1 13 5.5M.5 2.7A12 12 0 0 1 15.5 2.7M5.5 8A4.5 4.5 0 0 1 10.5 8"
            stroke={c}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <svg width="26" height="12" viewBox="0 0 26 12">
          <rect
            x="0.5"
            y="0.5"
            width="22"
            height="11"
            rx="2.5"
            fill="none"
            stroke={c}
            strokeWidth="1"
          />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill={c} />
          <rect x="23" y="4" width="1.5" height="4" rx="0.6" fill={c} />
        </svg>
      </div>
    </div>
  );
}

export function BottomNav({ active = "home" }: { active?: string }) {
  const items = [
    { id: "home", label: "Início", Icon: HomeIcon },
    { id: "search", label: "Pesquisar", Icon: SearchIcon },
    { id: "lists", label: "Listas", Icon: ListSquareIcon },
    { id: "map", label: "Mapa", Icon: MapIcon },
  ];
  return (
    <div className="absolute bottom-0 left-0 right-0 px-3.5 pt-2.5 pb-6 flex items-center justify-between bg-[linear-gradient(to_top,var(--color-bg)_70%,transparent)]">
      {items.map((it) => {
        const isActive = it.id === active;
        const Icon = it.Icon;
        return (
          <div
            key={it.id}
            className={
              "flex items-center gap-2 rounded-full justify-center " +
              (isActive
                ? "px-[18px] py-2.5 bg-blue text-white flex-none"
                : "px-2.5 py-2.5 text-ink flex-1")
            }
          >
            {isActive && <Icon color="#fff" />}
            <span className="text-sm font-bold">{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}
