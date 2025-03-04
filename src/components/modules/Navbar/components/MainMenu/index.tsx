import { menuItems } from "../menuItems";

export const MainMenu = () => (
  <div className="h-14 sm:h-28 flex justify-center items-center bg-transparent pt-4">
    <p className="text-xl sm:text-2xl font-medium font-manrope tracking-wider text-slate-200 absolute left-4 top-4.5 sm:top-12 sm:left-16">
      HENBYTEQ
    </p>
    <div className="hidden sm:flex sm:gap-12">
      {menuItems.map((link) => (
        <a
          key={link.label}
          href={link.path}
          className="text-lg font-manrope font-extralight tracking-wider text-slate-200 hover:text-slate-300 uppercase"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);
