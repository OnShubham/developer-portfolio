import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}
