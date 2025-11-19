"use client";

import { Scan, Dumbbell, TrendingUp, MessageCircle, Users, BarChart3 } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap = {
  Scan,
  Dumbbell,
  TrendingUp,
  MessageCircle,
  Users,
  BarChart3,
};

export default function Features() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-lime rounded-full blur-[100px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-cyan rounded-full blur-[120px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-neon-text">Como Funciona</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologia de ponta que transforma teu celular num personal trainer + nutricionista digital
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:border-neon-cyan/50 hover:bg-gray-900/50 transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan"
                style={{
                  animation: "slide-up 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neon-cyan">
                  <Icon className="w-7 h-7 text-gray-950" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black mb-3 text-gray-100 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold">Saiba mais</span>
                  <div className="w-4 h-0.5 bg-neon-cyan group-hover:w-8 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-neon">
            <div className="bg-gray-950 rounded-xl p-8">
              <h3 className="text-3xl font-black mb-4 gradient-neon-text">
                Pronto pra transformar teu shape?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Tira uma foto agora e descobre teu potencial real. A primeira análise é grátis.
              </p>
              <button className="btn-neon px-8 py-4 rounded-xl bg-neon-lime text-gray-950 font-bold text-lg shadow-neon-lime hover:shadow-neon-strong hover:scale-105 transition-all duration-300">
                Começar Análise Grátis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
