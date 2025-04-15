import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const redLettersRef = useRef([]);

  useEffect(() => {
    const allLetters = textRef.current.children;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      allLetters,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1 }
    );

    tl.to(
      Array.from(allLetters).filter(
        (el) => !redLettersRef.current.includes(el)
      ),
      { opacity: 0, y: -30, stagger: 0.05, duration: 0.6, delay: 1.5 }
    );

    tl.to(
      redLettersRef.current,
      {
        scale: 5,
        duration: 3,
        ease: "power3.inOut",
        transformOrigin: "center",
      },
      "-=0.4"
    );

    tl.to(
      loaderRef.current,
      {
        opacity: 0,
        duration: 2,
        backgroundColor: "red",
        ease: "power3.inOut",
        pointerEvents: "none",
      },
      "-=0.5"
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 w-full h-[100dvh] bg-black z-[9999] flex items-center justify-center"
    >
      <h1
        ref={textRef}
        className="text-white font-primary text-4xl md:text-6xl font-extrabold tracking-wide flex gap-2"
      >
        {"Resident Evil".split("").map((letter, index) => {
          const isRed = letter === "R" || letter === "E";
          return (
            <span
              key={index}
              ref={(el) => {
                if (isRed && el) redLettersRef.current.push(el);
              }}
              className={`inline-block ${isRed ? "text-red-500" : ""}`}
            >
              {letter}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default Loader;
