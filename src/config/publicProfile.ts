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
  linkedIn?: string;
  socialLinks?: Array<{
    label: string;
    url: string;
  }>;
}

export const publicProfile: PublicProfile = {
  fullName: "Md. Hasib Talukder",
  fatherName: "Mosharef Talukder",
  motherName: "Mariam",
  birthPlace: "Nalua, Bakerganj, Barishal, Bangladesh",
  nationality: "Bangladeshi",
  currentWorkplace: "Apex Fashion Wear Ltd.",
  currentStudy:
    "Bachelor of Business Administration (BBA Honours) in Management, Government Tolaram College, National University, Bangladesh",
  role: "Founder & Creator of TwinAI",
  project: "TwinAI",
  biography:
    "Md. Hasib Talukder is a Bangladeshi entrepreneur and technology enthusiast. He is the Founder of TwinAI. His interests include Artificial Intelligence, software development, automation, business, import & export, and building useful digital products. His vision is to create a platform where anyone can build their own AI Twin.",
  mission: "Become a true AI Twin that remembers, learns, adapts and assists people.",
  vision: "Build a platform where anyone can create a personal AI Twin that remembers, learns and helps people.",
  skills: [
    "Artificial Intelligence",
    "Software Development",
    "Automation",
    "Business Strategy",
    "Product Building",
  ],
  languages: ["Bangla", "English"],
  publicInterests: [
    "Artificial Intelligence",
    "Software Development",
    "Automation",
    "Import & Export",
    "Building useful digital products",
  ],
  website: "https://twinai.example",
  github: "https://github.com/hasib",
  linkedIn: "https://linkedin.com/in/hasib",
  socialLinks: [
    { label: "Website", url: "https://twinai.example" },
    { label: "GitHub", url: "https://github.com/hasib" },
  ],
};
