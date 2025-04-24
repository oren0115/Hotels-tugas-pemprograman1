import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Button
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Our Hotels", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Rooms & Rates", path: "/rooms" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <HeroNavbar
      maxWidth="xl"
      height="header"
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md p-5"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <Link className="font-bold text-inherit" onPress={() => navigate("/")}>Tangerang Hotels</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand >
          <AcmeLogo />
          <Link className="font-bold text-inherit" onPress={() => navigate("/")}>Tangerang Hotels</Link>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.path} >
            <Link as={RouterLink} to={item.path} className="font-medium text-inherit">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="pt-0 top-0">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              as={RouterLink}
              to={item.path}
              size="lg"
              className="w-full text-inherit font-medium"
              onPress={() => setIsMenuOpen(false)}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
};
