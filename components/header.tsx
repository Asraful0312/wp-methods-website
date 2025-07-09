"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobile-menu";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu?: () => void
  ) => {
    e.preventDefault();
    const isFragment = href.startsWith("#");
    const sectionId = isFragment ? href.slice(1) : href.split("#")[1];

    // If on a different page (not homepage), navigate to homepage with fragment
    if (isFragment && pathname !== "/") {
      router.push(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile menu if provided
    if (closeMenu) {
      setTimeout(() => closeMenu(), 300);
    }
  };
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <Logo />
      <nav className="ml-auto  items-center gap-6 sm:gap-8 hidden md:flex">
        <Link
          onClick={(e) => scrollToSection(e, "#services")}
          href="#services"
          className="font-medium hover:text-primary transition-colors relative group"
        >
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>
        <Link
          onClick={(e) => scrollToSection(e, "#pricing")}
          href="#pricing"
          className="font-medium hover:text-primary transition-colors relative group"
        >
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>
        <Link
          href="/about"
          className="font-medium hover:text-primary transition-colors relative group"
        >
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>
        <Link href="/services">
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Get Started
          </Button>
        </Link>
      </nav>
      <div className="block md:hidden">
        <MobileMenu onClick={scrollToSection} />
      </div>
    </header>
  );
};
export default Header;
