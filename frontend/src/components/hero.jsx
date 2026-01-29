import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden pt-24">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="3D Robot Scene"
          src="https://my.spline.design/robotfollowcursorforlandingpagemc-zLxWAaRe1wkvSK7WiAS00WOa/"
          className="w-full h-full pointer-events-auto"
          loading="lazy"
          allow="fullscreen; autoplay"
        ></iframe>
      </div>

      {/* Overlay to darken 3D behind text (must NOT block interactions) */}
      <div className="absolute inset-0 z-[1] bg-black/50 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Your ToDo app,
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            powered by 3D.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 mb-8">
          Drag and interact with the Spline scene, then jump into a clean, fast ToDo
          experience below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#features"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg shadow-purple-600/20"
          >
            Explore Features
          </a>
          <a
            href="/signup"
            className="bg-white/10 hover:bg-white/15 text-white font-semibold py-3 px-6 rounded-xl transition backdrop-blur border border-white/10"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
