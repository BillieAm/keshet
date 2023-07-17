import { menu, toggle } from "../menuSignal";

export default function NavMobile({ children }) {
  if (menu.value === "closed") return null;

  return (
    <aside class="fixed inset-0">
      <nav onClick={toggle}>{children}</nav>
    </aside>
  );
}
