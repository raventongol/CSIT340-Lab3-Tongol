import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Portfolio in Components"
          description="A modular React portfolio showcasing my journey as a versatile 3rd-year IT student."
          tech="React · Tailwind CSS"
          link="https://github.com/RavenTongol/CSIT340-Lab3-Tongol"
        />
        <ProjectCard
          year="2026"
          title="Full-Stack Web & Mobile App"
          description="A general-purpose student web project connecting front-end interfaces to back-end services."
          tech="Kotlin · PHP · MySQL"
          link="https://github.com/RavenTongol"
        />
        <ProjectCard
          year="2025"
          title="Custom PC Build Specs"
          description="Personal hardware configuration guide and system setup documentation for gaming and work."
          tech="PC Setup · Maintenance"
          link="https://github.com/RavenTongol"
        />
        <ProjectCard
          year="2025"
          title="Acoustic Guitar Tabs & Chord Web Page"
          description="A quick HTML/CSS reference page created to organize favorite guitar chords and songs."
          tech="HTML · CSS"
          link="https://github.com/RavenTongol"
        />
      </div>
    </section>
  );
}