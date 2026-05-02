const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_f610debc-ef05-476f-91fb-c01e8a987022/artifacts/eegoeqk7_image.png";

// variant: "ink" = original dark mark on light bg
//          "paper" = inverted for dark surfaces
export default function Logo({ height = 36, variant = "ink", className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="Yashik Yadav & Co."
      style={{
        height,
        width: "auto",
        filter: variant === "paper" ? "brightness(0) invert(1)" : undefined,
      }}
      className={`object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
