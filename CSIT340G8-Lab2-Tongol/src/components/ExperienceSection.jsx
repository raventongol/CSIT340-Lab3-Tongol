import { SectionHeading } from "./SectionHeading";
import { TimelineItem } from "./TimelineItem";

export function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Currently exploring various fields in IT including web development, hardware systems, and basic networking."
        />
        <TimelineItem
          period="2024 – Present"
          title="Self-Taught Hobbies & Tech Support"
          place="Home & Campus"
          description="Practicing guitar techniques and helping peers with basic computer troubleshooting and software installs."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School, ICT Strand"
          place="Talisay City National High School"
          description="Started taking IT seriously while learning initial concepts in programming and general computer use."
        />
      </ol>
    </section>
  );
}