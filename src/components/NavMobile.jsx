import { menu, toggle } from "../menuSignal";

function handleClick(e) {
  e.stopPropagation();
  toggle();
}

export default function NavMobile({ children }) {
  if (menu.value === "closed") return null;

  return (
    <aside class="fixed z-40 inset-0">
      <div
        onClick={e => handleClick(e)}
        class="fixed inset-0 bg-black/30 backdrop-blur-sm"
      ></div>
      <nav
        onClick={e => handleClick(e)}
        class="flex flex-col gap-7 fixed inset-y-0 left-0 right-1/4 px-11 py-32 font-bold items-center bg-background"
      >
        {children}
      </nav>
    </aside>
  );
}
