import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold text-stone-900">
          Raven A. Tongol
        </a>
        <div className="flex gap-6 text-sm text-stone-600">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}