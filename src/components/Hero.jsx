import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const residentRef = useRef(null);
  const evilRef = useRef(null);
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.to(videoRef.current, {
      borderRadius: "20px",
      color: "red",
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      scale: 0.8,
      transform: "perspective(1000px) rotateX(40deg) rotateY(15deg)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(residentRef.current, {
      color: "red",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(evilRef.current, {
      color: "red",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(backgroundRef.current, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="relative w-full h-[100dvh] overflow-hidden"
      ref={backgroundRef}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/public/videos/Resident_Evil_ 4 .mp4"
        autoPlay
        muted
        loop
        playsInline
        ref={videoRef}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transformOrigin: "center",
        }}
      />

      <div className="relative z-10 w-full h-full font-primary px-4">
        <p
          className=" text-5xl py-4 drop-shadow-lg text-white md:text-7xl"
          ref={residentRef}
        >
          <span className="text-red-500">R</span>esident
        </p>
      </div>
      <div className="absolute bottom-6 right-6 z-20 text-white text-6xl font-primary tracking-wide md:text-7xl">
        <p ref={evilRef}>
          <span className="text-red-500">E</span>vil
        </p>
      </div>
    </div>
  );
};

export default Hero;
