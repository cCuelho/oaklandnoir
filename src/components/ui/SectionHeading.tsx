type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-sans text-base leading-relaxed text-cream/75 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
