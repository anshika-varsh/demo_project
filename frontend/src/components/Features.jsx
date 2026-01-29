import React from "react";
import { GlowingEffect } from "./GlowingEffect";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Interactive 3D Experience",
      description: "Engage with stunning 3D visuals powered by Spline. Drag, rotate, and interact with immersive scenes.",
      gradient: "from-purple-500/20 to-fuchsia-500/20"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Built for speed. Add, edit, and manage your todos instantly with a smooth, responsive interface.",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your data is protected with JWT authentication. Sign up and keep your todos safe and synced.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "Access your todos from any device. Works seamlessly on desktop, tablet, and mobile browsers.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      description: "Modern, dark-themed interface with smooth animations and a polished user experience.",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: "🚀",
      title: "Easy to Use",
      description: "Intuitive design that gets out of your way. Focus on your tasks, not the tool.",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="features" className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to manage your tasks efficiently, wrapped in a stunning 3D experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)] overflow-hidden"
            >
              {/* Glowing Effect */}
              <GlowingEffect
                blur={8}
                inactiveZone={0.6}
                proximity={50}
                spread={30}
                variant="default"
                glow={false}
                disabled={false}
                movementDuration={1.5}
                borderWidth={1}
              />

              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
            
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500/0 group-hover:bg-purple-500/100 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
