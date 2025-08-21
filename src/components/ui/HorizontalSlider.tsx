"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

type HorizontalSliderProps = PropsWithChildren<{
  className?: string;
  itemGapClass?: string; // e.g., "gap-6"
  snap?: boolean; // enable CSS scroll snap
  controls?: boolean; // show prev/next buttons
}>;

export default function HorizontalSlider({
  children,
  className,
  itemGapClass = "gap-6",
  snap = true,
  controls = false,
}: HorizontalSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.8, 320);
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      isPointerDownRef.current = true;
      setIsDragging(false);
      startXRef.current = e.clientX;
      scrollStartLeftRef.current = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;
      const delta = e.clientX - startXRef.current;
      if (Math.abs(delta) > 3) setIsDragging(true);
      el.scrollLeft = scrollStartLeftRef.current - delta;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;
      isPointerDownRef.current = false;
      setIsDragging(false);
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div className={`relative ${className ?? ""}`}>
      <div
        ref={containerRef}
        className={[
          "flex overflow-x-auto overflow-y-visible hide-scrollbar select-none px-3 sm:px-0 touch-pan-x",
          itemGapClass,
          snap ? "snap-x snap-mandatory" : "",
          "scroll-smooth pb-2 cursor-default md:cursor-grab active:cursor-grabbing",
        ].join(" ")}
      >
        {React.Children.map(children, (child) => (
          <div
            className={[
              snap ? "snap-start" : "",
              "shrink-0 first:ml-3 last:mr-3 sm:first:ml-4 sm:last:mr-4 md:first:ml-0 md:last:mr-0 first:scroll-ml-3 sm:first:scroll-ml-4 md:first:scroll-ml-0",
            ].join(" ")}
          >
            {/* Prevent link clicks while dragging */}
            <div onClick={(e) => isDragging && e.preventDefault()}>{child}</div>
          </div>
        ))}
      </div>

      {/* Optional controls below */}
      {controls && (
        <div className="mt-2 mb-14 md:mb-2 flex items-center justify-center md:justify-start gap-2">
          <button
            aria-label="Previous"
            onClick={() => scrollByAmount(-1)}
            className="size-8 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white"
          >
            <span>{"<"}</span>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByAmount(1)}
            className="size-8 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white"
          >
            <span>{">"}</span>
          </button>
        </div>
      )}
    </div>
  );
}


