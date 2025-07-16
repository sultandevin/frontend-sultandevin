import Container from "@/components/ui/container";
import { ApiResponse } from "@/lib/types/suitmedia-api";
import Image from "next/image";
import Link from "next/link";

const IdeasPosts = async () => {
	const data = await fetch(`${process.env.SUITMEDIA_API_URL}`, {
		method: "GET",
		cache: "no-store",
		headers: {
			Accept: "application/json",
		},
	}).then((res) => res.json());

	const posts: ApiResponse = data;

	return (
		<Container>
			<div className="flex justify-between"></div>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				{posts.data.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</Container>
	);
};

const PostCard = ({ post }: { post: ApiResponse["data"][0] }) => {
	return (
		<Link
			href={`/ideas/${post.slug}`}
			className="border rounded-lg flex flex-col gap-3  group overflow-clip">
			<div className="relative overflow-clip h-40 bg-neutral-500">
				<Image
					src={`/placeholder.webp`}
					alt={post.title}
					className="object-cover group-hover:scale-105 ease-out transition-transform duration-300"
					sizes="20%"
					fill
				/>
			</div>
			<div className="flex flex-col gap-2 px-4">
				<time className="text-sm text-neutral-500">
					{new Date(post.created_at).toLocaleDateString("en-GB", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</time>
				<p className="text-lg font-semibold line-clamp-3 group-hover:underline transition-all">
					{post.title}
				</p>
			</div>
		</Link>
	);
};

export default IdeasPosts;
