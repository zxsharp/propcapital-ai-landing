import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "narrow" && "max-w-[900px]",
        size === "default" && "max-w-[1200px]",
        size === "wide" && "max-w-[1400px]",
        className
      )}
      {...props}
    />
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  surface?: "white" | "tinted";
}

export function Section({
  className,
  surface = "white",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28 lg:py-32 relative overflow-x-clip",
        surface === "white" ? "bg-white" : "bg-[#F5F5F7]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "between";
  action?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  ...props
}: SectionHeaderProps) {
  if (align === "between") {
    return (
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16",
          className
        )}
        {...props}
      >
        <div className="max-w-[62ch]">
          {eyebrow && (
            <p className="text-[13px] font-medium tracking-[0.04em] text-[#6E6E73] uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1] text-[#1D1D1F]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[17px] leading-[1.47] text-[#6E6E73]">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-[68ch]" : "max-w-[62ch]",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-[13px] font-medium tracking-[0.04em] text-[#6E6E73] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1] text-[#1D1D1F]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-[1.47] text-[#6E6E73]">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
