export type PublicProfile = {
  name: string;
  role: string;
  creatorName: string;
  mission: string;
  traits: readonly string[];
  supportedLanguages: readonly string[];
  introduction: string;
  greetingResponse: string;
  creatorIntroduction: string;
  identityResponse: string;
  thankYouResponse: string;
  unknownResponse: string;
};

export type PrivateProfile = {
  favoritePerson: {
    name: string;
    visibility: string;
  };
};

export type MemoryProfile = {
  summary: string;
  preferences: string[];
};

export type KnowledgeProfile = {
  creator: {
    name: string;
    project: string;
    role: string;
  };
  mission: string;
  capabilities: string[];
};
