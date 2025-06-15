
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full flex justify-center py-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink asChild active={pathname === link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    pathname === link.path
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
