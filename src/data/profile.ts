export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  tagline?: string;
  tech: string[];
  description: string;
  status?: string;
  company?: string;
  role?: string;
  year?: string;
  overview?: string;
  highlights?: string[];
  links?: SocialLink[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  href?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  score?: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  links: {
    github: string;
    linkedin: string;
    portfolio?: string;
    resume?: string;
    huggingface?: string;
    wandb?: string;
    medium?: string;
    substack?: string;
    lablab?: string;
    x?: string;
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: {
    languages: string[];
    pythonMl: string[];
    frameworks: string[];
    webTools: string[];
    databases: string[];
    infra: string[];
    dataViz: string[];
    core: string[];
  };
  certifications: CertificationItem[];
  education?: EducationItem[];
  writing: SocialLink[];
};

export const profile: Profile = {
  name: "Shubham Kharche",
  title: "Software Engineer | Backend Engineer (Generative AI) | Python Developer",
  location: "Pune, Maharashtra, India",
  email: "shubhamkharche30@gmail.com",
  summary:
    "Backend Engineer with 2+ years of experience in Python, FastAPI, Django, Generative AI, RAG systems, LLM applications, and scalable microservices development, with proven expertise in building AI-powered products and automation solutions.",
  links: {
    github: "https://github.com/OnShubham",
    linkedin: "https://www.linkedin.com/in/shubhamkharche",
  },
  experience: [
    {
      company: "InsightBridge Pvt Ltd",
      role: "Software Engineer",
      location: "Bengaluru",
      period: "April 2024 – April 2026",
      bullets: [
        "Built a RAG-based agentic chatbot, improving retrieval accuracy by 40% and reducing query latency by 30%.",
        "Developed and deployed 10+ FastAPI microservices, supporting 200+ concurrent users with asynchronous processing.",
        "Automated data extraction from 200+ e-commerce websites using Selenium and BeautifulSoup, reducing manual effort by 70%.",
        "Created AI-powered pricing dashboards with trend analysis and recommendations, improving pricing insights by 25%.",
        "Implemented JWT-based authentication and role-based access control (RBAC) to secure backend services.",
      ],
    },
  ],
  projects: [
    {
      name: "AI-Powered Education Platform",
      tagline: "Personalized AI learning assistant",
      tech: ["Python", "FastAPI", "LLM", "LangChain", "LangGraph", "Docker"],
      description:
        "Built a full-stack AI learning platform with Virtual Tutor, Career Advisor, Study Planner, and Quiz Generation modules.",
      status: "Completed",
      overview:
        "Delivered personalized tutoring, career recommendations, and contextual learning assistance through LLM-powered workflows.",
      highlights: [
        "Implemented personalized study plan generation based on user goals and progress",
        "Built dynamic quiz generation and evaluation workflows",
        "Improved student engagement and learning outcomes",
      ],
    },
    {
      name: "Dishoom – E-commerce Price Comparison Platform",
      tagline: "Marketplace price comparison and data aggregation",
      tech: ["Python", "Django", "Selenium", "BeautifulSoup", "MongoDB", "Docker"],
      description:
        "Built an e-commerce price comparison platform that aggregates product data from multiple online marketplaces.",
      status: "Completed",
      overview:
        "Implemented cross-platform price comparison features and standardized scraped product information for centralized analysis.",
      highlights: [
        "Enabled users to identify the best available product prices",
        "Designed a centralized database for product data cleaning and standardization",
      ],
    },
  ],
  skills: {
    languages: ["Python", "JavaScript", "SQL"],
    core: ["Backend Engineering", "Generative AI", "RAG Systems", "LLM Applications", "Microservices"],
    pythonMl: ["LangChain", "LangGraph", "OpenAI API", "Ollama", "Prompt Engineering", "Embeddings", "Semantic Search"],
    frameworks: ["FastAPI", "Django", "Node.js", "REST API", "Pydantic"],
    webTools: ["Docker", "GCP", "Git", "GitHub", "CI/CD", "Postman", "Jira", "Swagger", "Linux"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    infra: ["Docker", "GCP"],
    dataViz: [],
  },
  certifications: [],
  education: [
    {
      institution: "Savitribai Phule Pune University",
      degree: "MCA — Master of Computer Applications",
      period: "2021 - 2023",
      score: "CGPA: 8.5 / 10",
    },
    {
      institution: "Kavayitri Bahinabai Chaudhari North Maharashtra University",
      degree: "BCA — Bachelor of Computer Applications",
      period: "2018 - 2021",
      score: "Percentage: 82.40%",
    },
  ],
  writing: [],
};

export default profile;
