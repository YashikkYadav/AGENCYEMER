export default function Logo({ size = 36, variant = "ink" }) {
  // variant: "ink" => dark mark on light surface; "paper" => light on dark
  const fg = variant === "ink" ? "#0F1419" : "#FFFFFF";
  const accent = "#0E6E4F";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yashik Yadav & Co."
    >
      <circle cx="32" cy="32" r="29" stroke={fg} strokeWidth="1.5" />
      <path
        d="M10 36 L20 36 L24 28 L28 44 L32 22 L36 42 L40 32 L54 32"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M22 18 L32 30 L42 18"
        stroke={fg}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="32" y1="30" x2="32" y2="46" stroke={fg} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
