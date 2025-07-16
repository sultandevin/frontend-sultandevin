import Container from "@/components/ui/container";
import Image from "next/image";

const IdeasHero = () => {
	return (
		<section className="relative ">
			<Container className="items-center min-h-[40vh] text-white justify-center">
				<h1 className="text-4xl font-bold">Ideas</h1>
				<h2 className="">Where all our great things begin</h2>
			</Container>

			<Image
				src={`/placeholder.webp`}
				alt="Ideas Image"
				className="select-none -z-10 pointer-events-none object-cover"
				fill
				sizes="100%"
				priority
			/>
			<div className="absolute inset-0 bg-black/40 -z-10" />
		</section>
	);
};

export default IdeasHero;
