import { ReactNode } from "react";

export function GridBackground({ children }: { children?: ReactNode }) {
  return (
    <div className="h-max w-full bg-white bg-grid-[rgba(0,0,0,0.10)] relative flex items-center justify-center z-[-500]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(50%_100%_at_50%_-10%,transparent_0%,white)]"></div>
      <p>{children}</p>
    </div>
  );
}
