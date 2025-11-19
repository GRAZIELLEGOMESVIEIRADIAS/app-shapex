// ShapeX - Constantes e Dados do App

export const APP_NAME = "ShapeX";
export const APP_TAGLINE = "O Futuro do Shape Inteligente";
export const APP_DESCRIPTION = "Tira uma foto. Descobre teu shape. A ShapeX lê teu corpo, entende tuas metas e cria teu plano na hora.";

export const FEATURES = [
  {
    title: "Análise IA Visual",
    description: "Tira foto de frente e lateral. Nossa IA estima % de gordura, massa magra, biotipo e gera teu ShapeScore (0-100).",
    icon: "Scan",
  },
  {
    title: "Plano Automático",
    description: "Treino personalizado (casa ou academia) + nutrição com macros, kcal e suplementos recomendados na hora.",
    icon: "Dumbbell",
  },
  {
    title: "Reavaliação Semanal",
    description: "Manda foto nova toda semana. A IA compara teu progresso e atualiza o plano automaticamente.",
    icon: "TrendingUp",
  },
  {
    title: "Coach IA Humanizado",
    description: "Chat com IA que fala como gente. Motivação real, sem papo robótico. Teu parceiro de evolução 24/7.",
    icon: "MessageCircle",
  },
  {
    title: "Modo Homem/Mulher",
    description: "Interface e objetivos adaptados pro teu perfil. Ganhar massa, definir ou secar - a IA entende tuas metas.",
    icon: "Users",
  },
  {
    title: "Resultados Visuais",
    description: "Gráficos de progresso, fotos antes/depois e evolução do ShapeScore. Vê tua transformação acontecer.",
    icon: "BarChart3",
  },
];

export const PRICING_PLANS = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "",
    description: "Pra conhecer o poder da IA",
    features: [
      "1 análise corporal completa",
      "Plano de 7 dias (treino + nutrição)",
      "ShapeScore inicial",
      "Acesso ao chat coach (limitado)",
    ],
    cta: "Começar Grátis",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 39,90",
    period: "/mês",
    description: "Pra quem quer resultado de verdade",
    features: [
      "Reavaliações semanais ilimitadas",
      "Planos atualizados automaticamente",
      "Chat coach IA sem limites",
      "Histórico completo de progresso",
      "Recomendações de suplementos",
      "Suporte prioritário",
    ],
    cta: "Assinar Premium",
    highlighted: true,
    badge: "MAIS POPULAR",
  },
  {
    name: "Anual",
    price: "R$ 349,90",
    period: "/ano",
    description: "Economia de 27% + bônus",
    features: [
      "Tudo do Premium",
      "2 meses grátis",
      "Consultoria humana (1x/mês)",
      "Acesso antecipado a novidades",
      "Desconto em parceiros",
    ],
    cta: "Assinar Anual",
    highlighted: false,
    badge: "MELHOR CUSTO",
  },
];

export const STATS = [
  { value: "95%", label: "Precisão da IA" },
  { value: "7 dias", label: "Pra ver resultado" },
  { value: "24/7", label: "Coach disponível" },
  { value: "100%", label: "Personalizado" },
];

export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    role: "Perdeu 8kg em 2 meses",
    content: "Cara, a IA é assustadora de tão precisa. Ela viu que eu tinha mais gordura nas costas e ajustou meu treino. Resultado veio rápido demais.",
    rating: 5,
  },
  {
    name: "Juliana S.",
    role: "Ganhou 3kg de massa magra",
    content: "Melhor que personal presencial. A IA entende meu corpo e adapta tudo toda semana. E o chat é tipo ter uma amiga coach, sério.",
    rating: 5,
  },
  {
    name: "Rafael P.",
    role: "Definiu o shape em 45 dias",
    content: "Treino em casa, sem equipamento caro. A ShapeX montou um plano que funciona DE VERDADE. Meu shape mudou completamente.",
    rating: 5,
  },
];

export const FAQ = [
  {
    question: "Como a IA analisa meu corpo?",
    answer: "Usamos visão computacional avançada (MediaPipe + CNN) pra identificar pontos anatômicos, estimar composição corporal e gerar teu ShapeScore. Tudo em segundos, direto do celular.",
  },
  {
    question: "Funciona pra treino em casa?",
    answer: "Sim! A IA cria planos específicos pra casa (sem equipamento ou com o que você tiver) e pra academia. Você escolhe no cadastro.",
  },
  {
    question: "Preciso mandar foto toda semana?",
    answer: "Não é obrigatório, mas é o segredo do sucesso. A IA compara as fotos e ajusta teu plano automaticamente. Quanto mais dados, melhor o resultado.",
  },
  {
    question: "Minhas fotos são seguras?",
    answer: "100%. Criptografia total, armazenamento seguro e você pode deletar tudo quando quiser. Suas fotos são só suas.",
  },
  {
    question: "A IA substitui um nutricionista?",
    answer: "Não. A ShapeX é uma ferramenta de apoio baseada em ciência e IA. Pra casos específicos ou condições médicas, sempre consulte um profissional.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, sem burocracia. Cancela direto no app e pronto. Sem taxas, sem pegadinhas.",
  },
];
