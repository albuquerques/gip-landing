import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className="w-full py-12 lg:py-2">
      <div
        className={`
          mx-auto w-full max-w-[1120px]
          px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0
        `}
      >
        <div
          className={`
            flex flex-col gap-8
            sm:flex-row sm:items-center sm:justify-between
            ${className}
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
}