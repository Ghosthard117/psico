import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  children: React.ReactNode;
}

export default function Heading({
  as: Comp = "h1",
  size = "lg",
  className,
  children
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight font-lato text-gray-10 text-transform: capitalize first-letter:text-primary-50 text-balance",
        size === "xl" && "text-4xl md:text-7xl",
        size === "lg" && "text-3xl md:text-5xl",
        size === "md" && "text-2xl md:text-4xl",
        size === "sm" && "text-xl md:text-3xl",
        className
      )}
    >
      {children}
    </Comp>
  )
}