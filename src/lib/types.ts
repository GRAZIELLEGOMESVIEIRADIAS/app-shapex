// Tipos principais do ShapeX

export type Gender = 'male' | 'female';
export type Goal = 'bulk' | 'cut' | 'recomp';
export type Biotype = 'ectomorph' | 'mesomorph' | 'endomorph';
export type TrainingLocation = 'home' | 'gym';

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: Gender;
  height: number; // cm
  weight: number; // kg
  goal: Goal;
  trainingLocation: TrainingLocation;
  createdAt: Date;
  updatedAt: Date;
}

export interface BodyAnalysis {
  id: string;
  userId: string;
  shapeScore: number; // 0-100
  bodyFat: number; // %
  leanMass: number; // kg
  biotype: Biotype;
  strengths: string[];
  weaknesses: string[];
  frontPhotoUrl: string;
  sidePhotoUrl: string;
  analysisDate: Date;
  aiInsights: string;
}

export interface WorkoutPlan {
  id: string;
  userId: string;
  analysisId: string;
  weekNumber: number;
  trainingLocation: TrainingLocation;
  workouts: Workout[];
  createdAt: Date;
}

export interface Workout {
  day: number;
  name: string;
  focus: string;
  exercises: Exercise[];
  duration: number; // minutos
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: number; // segundos
  notes?: string;
}

export interface NutritionPlan {
  id: string;
  userId: string;
  analysisId: string;
  calories: number;
  protein: number; // g
  carbs: number; // g
  fats: number; // g
  meals: Meal[];
  supplements: Supplement[];
  createdAt: Date;
}

export interface Meal {
  name: string;
  time: string;
  foods: string[];
  calories: number;
}

export interface Supplement {
  name: string;
  dosage: string;
  timing: string;
  optional: boolean;
}

export interface Progress {
  userId: string;
  analyses: BodyAnalysis[];
  currentStreak: number;
  totalWorkouts: number;
  weightHistory: { date: Date; weight: number }[];
}
