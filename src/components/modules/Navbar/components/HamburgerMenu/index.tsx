import { Menu, ChevronRight } from "lucide-react";
import { TopDrawer } from "@/components/modules/TopDrawer";
import { menuItems } from "../menuItems";

export const HamburgerMenu = () => {
  const pathHash = window.location.hash;
  const isActive = (href: string) => pathHash.includes(href);
  return (
    <div className="sm:hidden absolute top-4.5 sm:top-8 right-6 z-50">
      <TopDrawer>
        <TopDrawer.Trigger>
          <Menu className="w-6 h-6 text-white" />
        </TopDrawer.Trigger>
        <TopDrawer.Content>
          <div className="flex flex-col gap-2 items-start">
            {menuItems.map((item) => (
              <a
                href={item.path}
                className={`inline-flex items-center px-1 pt-1 text-md font-semibold text-white/80 hover:text-gray-900`}
              >
                {isActive(item.path) && (
                  <>
                    <ChevronRight className="left-0 h-5 w-5 absolute ml-1 text-white/80" />
                    &nbsp;
                  </>
                )}
                {item.label}
              </a>
            ))}
          </div>
        </TopDrawer.Content>
      </TopDrawer>
    </div>
  );
};
