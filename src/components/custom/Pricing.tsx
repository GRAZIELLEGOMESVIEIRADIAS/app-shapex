"use client";

import { Check, Zap, Crown } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-neon-text">Planos ShapeX</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Escolhe o plano que encaixa no teu objetivo. Todos com garantia de 7 dias.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? "bg-gradient-neon shadow-neon-strong border-2 border-transparent"
                  : "bg-gray-900/30 border-2 border-gray-800 hover:border-neon-cyan/50"
              }`}
              style={{
                animation: "slide-up 0.6s ease-out forwards",
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-lime text-gray-950 text-xs font-black uppercase tracking-wider shadow-neon-lime">
                    {plan.highlighted ? <Crown className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Inner Card */}
              <div className={plan.highlighted ? "bg-gray-950 rounded-xl p-8 -m-8" : ""}>
                {/* Plan Name */}
                <h3 className="text-2xl font-black mb-2 text-gray-100">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-black ${plan.highlighted ? "gradient-neon-text" : "text-gray-100"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 font-semibold">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-neon-cyan" : "bg-gray-800"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-gray-950" : "text-neon-cyan"}`} />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`btn-neon w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-neon-cyan text-gray-950 shadow-neon-cyan hover:shadow-neon-strong hover:scale-105"
                      : "bg-gray-800 text-gray-100 border-2 border-gray-700 hover:border-neon-cyan hover:text-neon-cyan"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-neon-cyan" />
            <span>Cancela quando quiser</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-neon-cyan" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-neon-cyan" />
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-neon-cyan" />
            <span>Suporte brasileiro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
