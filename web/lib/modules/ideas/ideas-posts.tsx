import Container from "@/components/ui/container";
import { ApiResponse } from "@/lib/types/suitmedia-api";
import Image from "next/image";
import Link from "next/link";
import PerPageFilter from "./filters/per-page-filter";
import SortByFilter from "./filters/sort-by-filter";

const IdeasPosts = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const posts: ApiResponse = await fetch(`${process.env.SUITMEDIA_API_URL}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

  return (
    <Container>
      <div className="flex gap-8">
        <div>
          Showing <strong>{posts.meta.from}</strong> -{" "}
          <strong>{posts.meta.to}</strong> of{" "}
          <strong>{posts.meta.total}</strong>
        </div>
        <Link
          href={{
            query: {
              "page[size]": 50,
            },
          }}
        >
          test
        </Link>

        <div className="ml-auto flex items-center gap-1">
          Show per page:
          <PerPageFilter posts={posts} />
        </div>

        <div className="flex items-center gap-1">
          Sort by:
          <SortByFilter posts={posts} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
      className="group flex flex-col gap-3 overflow-clip rounded-lg shadow-lg transition-colors hover:bg-neutral-50"
    >
      <div className="relative h-40 overflow-clip bg-neutral-500">
        <Image
          src={`/placeholder.webp`}
          alt={post.title}
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="20%"
          fill
        />
      </div>
      <div className="flex flex-col gap-0 p-4 pt-2">
        <time className="text-sm text-neutral-500">
          {new Date(post.created_at)
            .toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
            .toUpperCase()}
        </time>
        <p className="line-clamp-3 text-lg font-semibold transition-all">
          {post.title}
        </p>
      </div>
    </Link>
  );
};

export default IdeasPosts;
