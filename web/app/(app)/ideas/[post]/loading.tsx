import Container from "@/components/ui/container";
import NavbarResolver from "@/lib/modules/layout/navbar-resolver";

const PostPageLoading = () => {
  return (
    <main className="relative">
      <NavbarResolver />
      <Container className="max-w-2xl gap-8 text-black">
        {/* Title skeleton */}
        <div className="mb-4 h-16 animate-pulse rounded-lg bg-gray-200" />

        {/* Date skeleton */}
        <div className="mb-8 h-5 w-48 animate-pulse rounded bg-gray-200" />

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        </div>
      </Container>
    </main>
  );
};

export default PostPageLoading;
