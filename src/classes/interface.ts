import type { CowColorPattern } from "./enums";

export interface Nutrition {
  energy: number; // Mcal
  protein: number; // % of dry matter intake
  calcium: number; // %
  phosphorus: number; // %
  fiber: number; // NDF %
  vitamins: { A: number; D: number; E: number };
}

export interface CowBody {
  color: CowColorPattern;
  hasHorns: boolean;
  hasTail: boolean;
  teatCount: number; // usually 4
}
