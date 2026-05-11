type IconProps = { color?: string; size?: number };

export const ChevronIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M9 6l6 6-6 6" stroke={color} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRightIcon = ({ color = "currentColor", size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BellIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 21a2 2 0 0 0 4 0" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ListIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ReceiptIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 4h14v17l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21V4zM9 9h6M9 13h6M9 17h4" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ScanIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const SearchIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1.75" />
    <path d="M21 21l-4-4" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const PinIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" stroke={color} strokeWidth="1.75" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.75" />
  </svg>
);

export const ShareIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v13M8 7l4-4 4 4M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BackIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M11 18l-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MenuIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16M4 12h16M4 18h16" stroke={color} strokeWidth="2.25" strokeLinecap="round" />
  </svg>
);

export const LockIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="11" width="16" height="11" rx="2" stroke={color} strokeWidth="1.75" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const HomeIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 12L12 4l9 8M5 10v10h14V10" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ListSquareIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="3" stroke={color} strokeWidth="1.75" />
    <path d="M8 9h8M8 13h8M8 17h5" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const MapIcon = ({ color = "currentColor" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
