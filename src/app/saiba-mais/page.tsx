"use client";

import { Scan, Dumbbell, TrendingUp, MessageCircle, Users, BarChart3, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/custom/Footer";

const featuresDetails = [
  {
    icon: Scan,
    title: "Análise IA Visual",
    shortDesc: "Tira uma foto e deixa a IA ler teu corpo na hora",
    fullDesc: "Nossa tecnologia de visão computacional analisa teu corpo em segundos usando inteligência artificial de ponta. A IA identifica teu percentual de gordura, massa magra, biotipo corporal (ectomorfo, mesomorfo ou endomorfo) e pontos fortes e fracos do teu físico.",
    howWorks: [
      "Tira duas fotos simples: uma de frente e outra de lado",
      "A IA processa as imagens usando redes neurais treinadas",
      "Recebe análise completa com ShapeScore de 0 a 100",
      "Identifica áreas que precisam de mais atenção no treino"
    ],
    benefits: [
      "Análise precisa sem equipamentos caros",
      "Resultados em menos de 30 segundos",
      "Acompanhamento visual da evolução",
      "Tecnologia validada por especialistas"
    ]
  },
  {
    icon: Dumbbell,
    title: "Plano de Treino Personalizado",
    shortDesc: "Treino sob medida pro teu corpo e objetivo",
    fullDesc: "Chega de treino genérico! A ShapeX cria um plano de treino 100% personalizado baseado na análise do teu corpo, teus objetivos e se tu treina em casa ou na academia. O plano evolui conforme teu progresso.",
    howWorks: [
      "Escolhe teu objetivo: ganhar massa, definir ou secar",
      "Informa se treina em casa ou na academia",
      "IA gera plano semanal com exercícios específicos",
      "Plano atualiza automaticamente a cada reavaliação"
    ],
    benefits: [
      "Treinos adaptados ao teu nível atual",
      "Progressão inteligente e segura",
      "Exercícios alternativos para casa ou academia",
      "Volume e intensidade otimizados"
    ]
  },
  {
    icon: TrendingUp,
    title: "Nutrição Inteligente",
    shortDesc: "Dieta calculada pro teu metabolismo e meta",
    fullDesc: "Esqueça dietas malucas da internet. A ShapeX calcula tuas necessidades calóricas e de macronutrientes (proteínas, carboidratos e gorduras) baseado no teu corpo, metabolismo e objetivo. Recebe sugestões de alimentos e suplementos.",
    howWorks: [
      "IA calcula teu gasto calórico total diário",
      "Define macros ideais pro teu objetivo",
      "Sugere alimentos comuns e acessíveis",
      "Recomenda suplementos quando necessário"
    ],
    benefits: [
      "Nutrição baseada em ciência, não achismo",
      "Flexibilidade para escolher alimentos",
      "Sugestões de suplementos Growth Supplements",
      "Ajustes automáticos conforme progresso"
    ]
  },
  {
    icon: MessageCircle,
    title: "Coach IA 24/7",
    shortDesc: "Tira dúvidas e recebe motivação quando precisar",
    fullDesc: "Tem um coach digital disponível 24 horas por dia pra tirar dúvidas sobre treino, nutrição, suplementação e te motivar nos dias difíceis. A IA conversa de forma natural, como um parceiro de treino de verdade.",
    howWorks: [
      "Acessa o chat a qualquer hora do dia",
      "Faz perguntas sobre exercícios, alimentação ou suplementos",
      "Recebe respostas personalizadas e motivacionais",
      "IA aprende com tuas preferências e histórico"
    ],
    benefits: [
      "Suporte instantâneo sem esperar",
      "Linguagem natural e motivadora",
      "Orientações baseadas no teu plano",
      "Disponível 24/7 sem custo extra"
    ]
  },
  {
    icon: Users,
    title: "Reavaliação Semanal",
    shortDesc: "Acompanha tua evolução e ajusta o plano",
    fullDesc: "A cada semana, tira novas fotos e a IA compara com as anteriores pra medir teu progresso real. O sistema atualiza automaticamente teu plano de treino e nutrição baseado nos resultados.",
    howWorks: [
      "Tira novas fotos toda semana no mesmo horário",
      "IA compara com fotos anteriores",
      "Mede mudanças em gordura, massa magra e medidas",
      "Plano é ajustado automaticamente"
    ],
    benefits: [
      "Acompanhamento preciso da evolução",
      "Ajustes baseados em resultados reais",
      "Motivação visual do progresso",
      "Plano sempre otimizado"
    ]
  },
  {
    icon: BarChart3,
    title: "Dashboard de Resultados",
    shortDesc: "Visualiza teu progresso em gráficos e fotos",
    fullDesc: "Acompanha toda tua jornada num dashboard completo com gráficos de evolução, comparação de fotos antes/depois, histórico de ShapeScore e conquistas desbloqueadas. Tudo pra te manter motivado.",
    howWorks: [
      "Acessa dashboard com todos os dados",
      "Vê gráficos de peso, gordura e massa magra",
      "Compara fotos de diferentes períodos",
      "Acompanha evolução do ShapeScore"
    ],
    benefits: [
      "Visualização clara do progresso",
      "Motivação através de conquistas",
      "Histórico completo da jornada",
      "Compartilhamento de resultados"
    ]
  }
];

export default function SaibaMais() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Voltar</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-lime rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan rounded-full blur-[150px] opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="gradient-neon-text">Como a ShapeX</span>
            <br />
            <span className="text-gray-100">Transforma Teu Shape</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entende como cada funcionalidade trabalha junto pra te levar ao próximo nível
          </p>
        </div>
      </section>

      {/* Features Details */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-24">
          {featuresDetails.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Icon Side */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-neon-strong">
                    <Icon className="w-16 h-16 text-gray-950" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-100">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-neon-cyan font-bold">
                      {feature.shortDesc}
                    </p>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.fullDesc}
                  </p>

                  {/* How it Works */}
                  <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-black mb-4 text-neon-lime">
                      Como Funciona
                    </h3>
                    <ul className="space-y-3">
                      {feature.howWorks.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-lime/20 flex items-center justify-center mt-0.5">
                            <span className="text-neon-lime text-sm font-bold">{i + 1}</span>
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-black mb-4 text-neon-cyan">
                      Benefícios
                    </h3>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-neon-cyan mt-2" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-neon">
            <div className="bg-gray-950 rounded-xl p-12">
              <h2 className="text-4xl sm:text-5xl font-black mb-6 gradient-neon-text">
                Pronto pra começar?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Tira uma foto agora e descobre como a ShapeX pode transformar teu shape de verdade
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-neon px-8 py-4 rounded-xl bg-neon-lime text-gray-950 font-bold text-lg shadow-neon-lime hover:shadow-neon-strong hover:scale-105 transition-all duration-300">
                  Começar Análise Grátis
                </button>
                <Link 
                  href="/"
                  className="px-8 py-4 rounded-xl border-2 border-neon-cyan text-neon-cyan font-bold text-lg hover:bg-neon-cyan/10 transition-all duration-300"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
