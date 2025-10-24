import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

const Icons = {
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),

  ai: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M12 5V3" />
      <path d="M12 21v-2" />
      <path d="M19 12h2" />
      <path d="M3 12h2" />
      <path d="m16.5 7.5-.88.88" />
      <path d="m8.38 15.62-.88.88" />
      <path d="M16.5 16.5l-.88-.88" />
      <path d="m8.38 8.38-.88-.88" />
    </svg>
  ),
};

type LandingPageProps = {
  openSignup: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ openSignup }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex w-full items-center justify-center">
      <div className="absolute font-[font1] text-4xl text-center font-extrabold">
        Stuck on a Caption? Let Our AI Write It for You.
      </div>
      <div
        className="relative mt-60 flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg bordere p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-row justify-between">
          <Circle ref={fromRef}>
            <Icons.user />
          </Circle>

          <Circle ref={toRef}>
            <Icons.ai />
          </Circle>
        </div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          curvature={-20}
          startYOffset={10}
          endYOffset={10}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          curvature={20}
          reverse
          startYOffset={-10}
          endYOffset={-10}
        />
      </div>
      <div className="absolute mt-110">
        <Button
          className="cursor-pointer"
          variant={"outline"}
          onClick={openSignup}
        >
          Get Your Caption Now
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
