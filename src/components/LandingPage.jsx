import React, { useEffect } from "react";
import Navbar from "./Navbar";
import MovingCards from "./MovingCards";
import { Button } from "./ui/button";

const LandingPage = () => {
  useEffect(() => {
    // Floating particles
    const hero = document.querySelector(".hero");
    const particleCount = 30;

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0.4;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          transform: translateY(-100vh) translateX(0px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = `rgba(${Math.random() * 155 + 100}, ${
        Math.random() * 100 + 50
      }, ${Math.random() * 205 + 50}, ${Math.random() * 0.5 + 0.2})`;
      particle.style.borderRadius = "50%";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      particle.style.animation = `floatUp ${duration}s linear ${delay}s infinite`;
      hero?.appendChild(particle);
    }

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="hero relative w-full bg-gradient-to-b from-[#0a0a12] to-black text-[#e2e2e2]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#0a0a12_0%,#000000_100%)] z-[-1]" />
      <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.5" fill="white" opacity="0.5"/></svg>&apos;)] bg-[length:2px_2px] animate-[twinkle_10s_infinite_alternate] z-[-1]' />

      <Navbar />

      {/* Hero content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center py-28">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-md animate-pulse">
            Nalanda{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Abhiyan's
            </span>{" "}
            Lab
          </h1>
          <p className="text-lg mb-8 opacity-80">
            Innovative solutions powered by cutting-edge technology and designed
            for tomorrow's challenges.
          </p>
          <div className="flex space-x-4">
            <Button className="px-6 py-5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
              Get Started
            </Button>
            <Button className="rounded-full" asChild>
              <button className="px-6 py-5 bg-transparent border border-purple-500 rounded-full font-bold hover:bg-purple-900 hover:bg-opacity-20 transition-all transform hover:scale-105">
                Learn More
              </button>
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl bg-purple-600 opacity-20" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl bg-blue-600 opacity-20" />
            <div className="transform-gpu transition-transform duration-500 hover:rotate-y-6 animate-[float_6s_ease-in-out_infinite]">
              <img
                src="https://pbs.twimg.com/media/GAUcb3dXMAAPsmt.jpg:large"
                alt="Hero Image"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-lg animate-[rotateY_20s_linear_infinite]">
              <img
                src="https://placehold.co/400x400"
                alt="3D cube"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full animate-[rotateY_20s_linear_infinite]">
              <img
                src="https://placehold.co/400x400"
                alt="glowing sphere"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-10">
        <MovingCards />
      </div>
    </div>
  );
};

export default LandingPage;
