export default function Logo({ size = 36, variant = "dark" }) {
  // variant: "dark" => mark on light, "light" => mark on dark
  const fg = variant === "dark" ? "#0E1012" : "#F2EDE3";
  const accent = "#D9F36C";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yashik Yadav & Co."
    >
      {/* Outer asymmetric ring */}
      <circle cx="32" cy="32" r="29" stroke={fg} strokeWidth="2" />
      {/* Pulse line — healthcare nod */}
      <path
        d="M8 36 L18 36 L22 28 L26 44 L30 22 L34 42 L38 32 L56 32"
        stroke={accent}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Y monogram */}
      <path
        d="M22 18 L32 30 L42 18"
        stroke={fg}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="32" y1="30" x2="32" y2="46" stroke={fg} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
