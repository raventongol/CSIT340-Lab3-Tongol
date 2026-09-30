import { SectionHeading } from "./SectionHeading";
import { ContactLink } from "./ContactLink";

export function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:raven.tongol@cit.edu" text="raven.tongol@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/RavenTongol" text="github.com/RavenTongol" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/raventongol" text="linkedin.com/in/raventongol" />
      </ul>
    </section>
  );
}