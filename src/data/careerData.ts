
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Skill {
  name: string;
  description: string;
  level: SkillLevel;
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'Course' | 'Book' | 'YouTube' | 'Website' | 'Tool';
  free: boolean;
  description: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  timeframe: string;
  skills: string[];
  resources: ResourceLink[];
  milestones: string[];
}

export interface SalaryProspect {
  trend: 'Rising' | 'Stable' | 'Variable';
  entryLevelRange: string;
  midLevelRange: string;
  seniorLevelRange: string;
  notes: string;
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  problemsSolved: string[];
  salaryRange?: {
    entry: number;
    mid: number;
    senior: number;
  };
  salaryProspect: SalaryProspect;
  demandLevel: 'High' | 'Medium' | 'Low';
  requiredSkills: Skill[];
  roadmap: RoadmapStep[];
  careerOutlook: string;
}

// Import all career paths
import { dataScientistCareer } from './careers/dataScientist';
import { aiEthicsSpecialistCareer } from './careers/aiEthicsSpecialist';
import { climateTechEntrepreneurCareer } from './careers/climateTechEntrepreneur';
import { humanMachineInterfaceDesignerCareer } from './careers/humanMachineInterfaceDesigner';
import { quantumComputingSpecialistCareer } from './careers/quantumComputingSpecialist';
import { cybersecurityArchitectCareer } from './careers/cybersecurityArchitect';
import { biomedicalEngineerCareer } from './careers/biomedicalEngineer';
import { roboticsEngineerCareer } from './careers/roboticsEngineer';

// Combine all careers into a single array
export const careerData: CareerPath[] = [
  dataScientistCareer,
  aiEthicsSpecialistCareer,
  climateTechEntrepreneurCareer,
  humanMachineInterfaceDesignerCareer,
  quantumComputingSpecialistCareer,
  cybersecurityArchitectCareer,
  biomedicalEngineerCareer,
  roboticsEngineerCareer
];
