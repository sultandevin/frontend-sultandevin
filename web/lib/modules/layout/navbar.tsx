"use client";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
	{
		href: "/work",
		label: "Work",
	},
	{
		href: "/about",
		label: "Services",
	},
	{
		href: "/ideas",
		label: "Ideas",
	},
	{
		href: "/careers",
		label: "Careers",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 inset-x-0 bg-orange-400/80 z-50 backdrop-blur-sm h-25 flex items-center text-white">
			<Container className="flex-row justify-between py-0 items-center">
				<Link href={`/`}>
					<h1 className="text-lg font-bold">Logo</h1>
				</Link>

				<div>
					{NAV_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								buttonVariants({ variant: "link", size: "sm" }),
								pathname === link.href && "underline"
							)}>
							{link.label}
						</Link>
					))}
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
