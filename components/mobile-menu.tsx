import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-2 mt-5">
          <SheetTrigger asChild>
            <Link
              onClick={(e) => onClick(e, "#services")}
              href="#services"
              className="font-medium hover:text-primary transition-colors relative group text-lg"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="#pricing"
              onClick={(e) => onClick(e, "#pricing")}
              className="font-medium hover:text-primary transition-colors relative group text-lg"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/about"
              className="font-medium hover:text-primary transition-colors relative group text-lg"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </SheetTrigger>

          <SheetTrigger asChild>
            <Link className="mt-5" href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full">
                Get Started
              </Button>
            </Link>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  );
}
