interface SectionDividerProps {
  from: 'dark' | 'light' | 'black';
  to: 'dark' | 'light' | 'black';
}

const FILLS: Record<string, string> = {
  dark: '#0F0F0F',
  light: '#F5F0EB',
  black: '#0A0A0A',
};

export default function SectionDivider({ from, to }: SectionDividerProps) {
  return (
    <div
      className={`section-divider section-divider--${to}`}
      style={{ background: FILLS[from] }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,0 C360,60 1080,0 1440,60 L1440,60 L0,60 Z"
          fill={FILLS[to]}
        />
        <path
          className="divider-line"
          d="M0,0 C360,60 1080,0 1440,60"
        />
      </svg>
    </div>
  );
}
