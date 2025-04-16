import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    gsap.to(video, {
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      scale: 0.9,
      transform: "perspective(1000px) rotateX(15deg)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: video,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/public/videos/Resident_Evil_ 4 .mp4" // if in public folder
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

      <div className="relative z-10 w-full h-full font-secondary px-4">
        <p className=" text-4xl py-4 drop-shadow-lg text-white">
          <span className="text-red-500">R</span>esident
        </p>
      </div>
      <div className="absolute bottom-6 right-6 z-20 text-white text-4xl font-secondary tracking-wide">
        <span className="text-red-500">E</span>vil
      </div>
    </div>
  );
};

export default Hero;
