import ScrollProgressBar from "@/components/scroll-progress-bar";
import Container from "@/components/ui/container";
import NavbarResolver from "@/lib/modules/layout/navbar-resolver";
import { Post } from "@/lib/types/suitmedia-api";
import { notFound } from "next/navigation";

const PostPage = async ({ params }: { params: Promise<{ post: string }> }) => {
  const { post: slug } = await params;

  const data = await fetch(`${process.env.SUITMEDIA_API_URL}/${slug}`, {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!data || !data.ok) {
    return notFound();
  }

  const post: Post = (await data.json()).data;

  return (
    <main className="relative">
      <ScrollProgressBar />
      <NavbarResolver />
      <Container className="max-w-2xl gap-8 text-black">
        <h1 className="text-5xl font-bold text-balance">{post.title}</h1>
        <p className="text-neutral-600">
          {new Date(post.created_at)
            .toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
            .toUpperCase()}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="space-y-4 text-justify"
        />
      </Container>
    </main>
  );
};

export default PostPage;
