import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef([]);
  const videoRef = useRef(null);

  const CheckRefs = (element) => {
    if (element && !titleRef.current.includes(element)) {
      titleRef.current.push(element);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    gsap.to(video, {
      borderRadius: "20px",
      color: "red",
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      scale: 0.8,
      transform: "perspective(1000px) rotateX(40deg) rotateY(15deg)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: video,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(titleRef.current, {
      color: "red",
      scrollTrigger: {
        trigger: videoRef.current,
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

      <div
        className="relative z-10 w-full h-full font-secondary px-4"
        ref={CheckRefs}
      >
        <p className=" text-5xl py-4 drop-shadow-lg text-white">
          <span className="text-red-500">R</span>esident
        </p>
      </div>
      <div
        className="absolute bottom-6 right-6 z-20 text-white text-6xl font-secondary tracking-wide"
        ref={CheckRefs}
      >
        <span className="text-red-500">E</span>vil
      </div>
    </div>
  );
};

export default Hero;
