// Simulação de análise de IA corporal
// Em produção, isso seria integrado com MediaPipe/OpenPose + modelo CNN

import { BodyAnalysis, Biotype, Gender, Goal } from '../types';

interface AnalysisInput {
  userId: string;
  gender: Gender;
  age: number;
  height: number;
  weight: number;
  goal: Goal;
  frontPhotoUrl: string;
  sidePhotoUrl: string;
}

export async function analyzeBody(input: AnalysisInput): Promise<BodyAnalysis> {
  // Simulação de processamento de IA (em produção seria uma chamada real)
  await new Promise(resolve => setTimeout(resolve, 3000));

  const bmi = input.weight / Math.pow(input.height / 100, 2);
  
  // Estimativa de gordura corporal baseada em BMI e gênero
  let bodyFat: number;
  if (input.gender === 'male') {
    bodyFat = Math.max(8, Math.min(35, (1.20 * bmi) + (0.23 * input.age) - 16.2));
  } else {
    bodyFat = Math.max(15, Math.min(45, (1.20 * bmi) + (0.23 * input.age) - 5.4));
  }

  const leanMass = input.weight * (1 - bodyFat / 100);

  // Determinar biotipo
  let biotype: Biotype;
  if (bmi < 20) {
    biotype = 'ectomorph';
  } else if (bmi < 25) {
    biotype = 'mesomorph';
  } else {
    biotype = 'endomorph';
  }

  // Calcular ShapeScore (0-100)
  const shapeScore = calculateShapeScore(bodyFat, leanMass, input.gender, input.age);

  // Identificar pontos fortes e fracos
  const { strengths, weaknesses } = identifyStrengthsWeaknesses(
    bodyFat,
    leanMass,
    biotype,
    input.gender
  );

  // Gerar insights da IA
  const aiInsights = generateAIInsights(
    input.gender,
    bodyFat,
    biotype,
    input.goal,
    shapeScore
  );

  return {
    id: `analysis_${Date.now()}`,
    userId: input.userId,
    shapeScore,
    bodyFat: Math.round(bodyFat * 10) / 10,
    leanMass: Math.round(leanMass * 10) / 10,
    biotype,
    strengths,
    weaknesses,
    frontPhotoUrl: input.frontPhotoUrl,
    sidePhotoUrl: input.sidePhotoUrl,
    analysisDate: new Date(),
    aiInsights,
  };
}

function calculateShapeScore(
  bodyFat: number,
  leanMass: number,
  gender: Gender,
  age: number
): number {
  let score = 50; // Base

  // Ajuste por gordura corporal
  const idealBodyFat = gender === 'male' ? 15 : 22;
  const fatDiff = Math.abs(bodyFat - idealBodyFat);
  score -= fatDiff * 1.5;

  // Ajuste por massa magra
  const avgLeanMass = gender === 'male' ? 60 : 45;
  const leanDiff = leanMass - avgLeanMass;
  score += leanDiff * 0.5;

  // Ajuste por idade
  if (age < 30) score += 5;
  else if (age > 40) score -= 5;

  return Math.max(0, Math.min(100, Math.round(score)));
}

function identifyStrengthsWeaknesses(
  bodyFat: number,
  leanMass: number,
  biotype: Biotype,
  gender: Gender
): { strengths: string[]; weaknesses: string[] } {
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  // Análise de gordura
  const idealBodyFat = gender === 'male' ? 15 : 22;
  if (bodyFat < idealBodyFat + 3) {
    strengths.push('Baixo percentual de gordura');
  } else if (bodyFat > idealBodyFat + 8) {
    weaknesses.push('Gordura corporal elevada');
  }

  // Análise de massa magra
  const avgLeanMass = gender === 'male' ? 60 : 45;
  if (leanMass > avgLeanMass + 5) {
    strengths.push('Boa massa muscular');
  } else if (leanMass < avgLeanMass - 5) {
    weaknesses.push('Massa muscular abaixo da média');
  }

  // Análise por biotipo
  switch (biotype) {
    case 'ectomorph':
      strengths.push('Metabolismo acelerado');
      weaknesses.push('Dificuldade em ganhar massa');
      break;
    case 'mesomorph':
      strengths.push('Facilidade em ganhar músculo');
      strengths.push('Resposta rápida ao treino');
      break;
    case 'endomorph':
      strengths.push('Facilidade em ganhar força');
      weaknesses.push('Tendência a acumular gordura');
      break;
  }

  return { strengths, weaknesses };
}

function generateAIInsights(
  gender: Gender,
  bodyFat: number,
  biotype: Biotype,
  goal: Goal,
  shapeScore: number
): string {
  const insights: string[] = [];

  // Análise geral
  if (shapeScore >= 80) {
    insights.push('Teu shape tá top! Foco agora é manter e refinar os detalhes.');
  } else if (shapeScore >= 60) {
    insights.push('Tá no caminho certo, parceiro. Com consistência, vai decolar.');
  } else if (shapeScore >= 40) {
    insights.push('Tem potencial demais aqui. Bora ajustar treino e dieta pra ver resultado rápido.');
  } else {
    insights.push('Calma, todo mundo começa de algum lugar. Teu plano vai te colocar no eixo.');
  }

  // Insights por biotipo
  switch (biotype) {
    case 'ectomorph':
      insights.push('Teu corpo queima calorias rápido. Vai precisar comer bastante e treinar pesado pra crescer.');
      break;
    case 'mesomorph':
      insights.push('Sorte a tua — teu corpo responde bem a treino. Aproveita essa vantagem.');
      break;
    case 'endomorph':
      insights.push('Teu corpo guarda energia fácil. Controle a dieta e foca em treino intenso pra definir.');
      break;
  }

  // Insights por objetivo
  switch (goal) {
    case 'bulk':
      insights.push('Pra ganhar massa, vai ter que comer mais do que tá acostumado. Treino pesado e descanso são chave.');
      break;
    case 'cut':
      insights.push('Definir é sobre déficit calórico inteligente. Mantém a proteína alta e treina forte pra não perder músculo.');
      break;
    case 'recomp':
      insights.push('Recomposição é o jogo longo. Paciência, treino consistente e dieta equilibrada.');
      break;
  }

  return insights.join(' ');
}
