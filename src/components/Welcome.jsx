import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const spans = textRef.current.querySelectorAll("span");

    gsap.to(backgroundRef.current, {
      backgroundColor: "black",
      ease: "none",
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.set(spans, { opacity: 0, y: 20, filter: "blur(4px)" });

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      color: "red",
      duration: 14,
      ease: "power2.inOut",
      stagger: 0.8,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 100%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden pt-30"
      ref={backgroundRef}
    >
      <div className="h-full flex justify-center">
        <h2
          className="text-white text-2xl text-center font-secondary px-4 md:text-4xl md:px-6 lg:text-6xl lg:w-[50%]"
          ref={textRef}
        >
          <span>Forget</span> <span>everything</span> <span>you</span>{" "}
          <span>know </span> <span>about</span>{" "}
          <span className="text-red-500">R</span>
          <span>esident</span> <span className="text-red-500">E</span>
          <span>vil</span>
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
