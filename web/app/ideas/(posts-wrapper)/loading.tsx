import Container from "@/components/ui/container";

const LoadingPostsPage = () => {
  return (
    <Container>
      <div className="h-12 animate-pulse bg-neutral-200" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <LoadingPostCard key={index} />
        ))}
      </div>
    </Container>
  );
};

const LoadingPostCard = () => (
  <div className="flex h-64 w-full animate-pulse flex-col gap-3 overflow-clip rounded-lg bg-neutral-200 shadow-lg transition-colors" />
);

export default LoadingPostsPage;
