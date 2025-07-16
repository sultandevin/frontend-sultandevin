import { cn } from "@/utils/cn";

const Container = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<section
			className={cn(
				`mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-14 sm:px-8`,
				className
			)}>
			{children}
		</section>
	);
};

export default Container;
