export interface PublicProfile {
  fullName: string;
  fatherName: string;
  motherName: string;
  birthPlace: string;
  nationality: string;
  currentWorkplace: string;
  currentStudy: string;
  role: string;
  project: string;
  biography: string;
  mission: string;
  vision: string;
  skills: string[];
  languages: string[];
  publicInterests: string[];
  website?: string;
  github?: string;
  linkedin?: string;
  socialLinks?: string[];
}

export interface PrivateProfileEntry {
  value: unknown;
  visibility: string;
  accessLevel: string;
}

export interface PrivateProfile {
  favoritePerson?: PrivateProfileEntry;
  personalDreams?: PrivateProfileEntry;
  privateGoals?: PrivateProfileEntry;
  privateNotes?: PrivateProfileEntry;
  ownerSecrets?: PrivateProfileEntry;
  futurePlans?: PrivateProfileEntry;
  sensitiveInformation?: PrivateProfileEntry;
}

export interface MemoryProfile {
  preferences: string[];
  favoriteTopics: string[];
  conversationHistory: string[];
  longTermMemory: string[];
  importantDates: string[];
  learningProgress: string[];
  futureReminders: string[];
  recentContext: string[];
  conversationSummary: string[];
}

export interface KnowledgeProfile {
  project: string;
  companyInformation?: string[];
  creatorBackground?: string[];
  frequentlyAskedQuestions?: string[];
  businessInformation?: string[];
  aiCapabilities?: string[];
  productRoadmap?: string[];
  technicalStack?: string[];
  codingStandards?: string[];
  platformVision?: string[];
}

export type PermissionLevel = "PUBLIC" | "AUTHENTICATED" | "OWNER" | "SYSTEM";
