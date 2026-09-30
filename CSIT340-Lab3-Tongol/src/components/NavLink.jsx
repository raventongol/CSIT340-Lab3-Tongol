export function NavLink({ href, children }) {
  return (
    <a href={href} className="hover:text-stone-900">
      {children}
    </a>
  );
}