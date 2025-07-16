import { cn } from "@/utils/cn";

const NavbarResolver = ({ className }: { className?: string }) => {
  return <div className={cn(`h-25`, className)} />;
};

export default NavbarResolver;
