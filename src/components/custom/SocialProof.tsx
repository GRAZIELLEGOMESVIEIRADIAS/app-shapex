"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, FAQ } from "@/lib/constants";

export default function SocialProof() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan rounded-full blur-[140px] opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-neon-text">Quem Já Transformou</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Resultados reais de quem confiou na IA e mudou o shape
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105"
                style={{
                  animation: "slide-up 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-neon-cyan/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon-lime text-neon-lime" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-black text-gray-100">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neon-cyan">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-neon-text">Dúvidas Frequentes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tudo que você precisa saber sobre a ShapeX
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300"
                style={{
                  animation: "slide-up 0.6s ease-out forwards",
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-black text-gray-100 group-open:text-neon-cyan transition-colors">
                    {item.question}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center group-open:bg-neon-cyan group-open:rotate-180 transition-all duration-300">
                    <svg className="w-4 h-4 text-gray-400 group-open:text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
