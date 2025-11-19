"use client";

import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan rounded-full blur-[120px] opacity-20 float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-lime rounded-full blur-[140px] opacity-20 float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-neon-cyan/30 backdrop-blur-sm mb-8 slide-up">
          <Sparkles className="w-4 h-4 text-neon-cyan" />
          <span className="text-sm font-bold text-neon-cyan">
            Primeira IA Fitness Brasileira
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-neon-text">{APP_NAME}</span>
        </h1>
        
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-4 slide-up" style={{ animationDelay: "0.2s" }}>
          {APP_TAGLINE}
        </p>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 slide-up" style={{ animationDelay: "0.3s" }}>
          {APP_DESCRIPTION}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 slide-up" style={{ animationDelay: "0.4s" }}>
          <button className="btn-neon group px-8 py-4 rounded-xl bg-neon-cyan text-gray-950 font-bold text-lg shadow-neon-cyan hover:shadow-neon-strong hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Começar Grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="btn-neon group px-8 py-4 rounded-xl bg-gray-900/50 border-2 border-neon-lime text-neon-lime font-bold text-lg hover:bg-neon-lime hover:text-gray-950 hover:shadow-neon-lime transition-all duration-300 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Ver Como Funciona
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto slide-up" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "95%", label: "Precisão da IA" },
            { value: "7 dias", label: "Pra ver resultado" },
            { value: "24/7", label: "Coach disponível" },
            { value: "100%", label: "Personalizado" },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black gradient-neon-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            Descubra mais
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
