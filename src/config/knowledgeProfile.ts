export interface KnowledgeProfile {
  twinAIProject: {
    name: string;
    description: string;
  };
  companyInformation: {
    name: string;
    summary: string;
  };
  creatorBackground: {
    name: string;
    role: string;
    project: string;
  };
  frequentlyAskedQuestions: Array<{
    question: string;
    answer: string;
  }>;
  businessInformation: {
    focus: string[];
    valueProposition: string;
  };
  aiCapabilities: string[];
  productRoadmap: string[];
  technicalStack: string[];
  codingStandards: string[];
  platformVision: string;
}

export const knowledgeProfile: KnowledgeProfile = {
  twinAIProject: {
    name: "TwinAI",
    description: "A platform for creating personal AI twins that remember, learn, and assist people.",
  },
  companyInformation: {
    name: "TwinAI",
    summary: "A scalable AI Twin platform focused on identity, memory, and future provider integration.",
  },
  creatorBackground: {
    name: "Md. Hasib Talukder",
    role: "Founder & Creator of TwinAI",
    project: "TwinAI",
  },
  frequentlyAskedQuestions: [
    {
      question: "Who created TwinAI?",
      answer: "TwinAI was created by Md. Hasib Talukder.",
    },
    {
      question: "What is TwinAI?",
      answer: "TwinAI is a platform for building personal AI twins with identity, memory, and knowledge layers.",
    },
  ],
  businessInformation: {
    focus: ["Identity Systems", "AI Twin Experiences", "Knowledge and Memory"],
    valueProposition: "Help users create personalized AI companions that remain consistent across providers and experiences.",
  },
  aiCapabilities: [
    "Personal AI Twin conversations",
    "Creator identity handling",
    "Memory-aware responses",
    "Future Gemini/OpenAI/Claude integration",
  ],
  productRoadmap: [
    "Integrate real AI provider",
    "Add memory persistence",
    "Introduce authentication",
    "Expand voice and knowledge features",
  ],
  technicalStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  codingStandards: [
    "Strong TypeScript typing",
    "Modular architecture",
    "No duplicated identity strings",
    "Provider-agnostic design",
  ],
  platformVision: "Create a durable, enterprise-grade identity system that remains consistent across every AI provider and product surface.",
};
