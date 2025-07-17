import Container from "@/components/ui/container";

const DynamicPageLoading = () => {
  return (
    <>
      <main className="min-h-[60vh] animate-pulse bg-neutral-200">
        <Container className="items-center">
          <div className="flex flex-col items-center justify-center space-y-4 py-16">
            <div className="h-8 w-1/2 rounded bg-neutral-300"></div>
            <div className="h-6 w-1/3 rounded bg-neutral-300"></div>
            <div className="h-4 w-1/4 rounded bg-neutral-300"></div>
          </div>
        </Container>
      </main>

      {/* Content skeleton */}

      <Container className="max-w-2xl">
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
    </>
  );
};

export default DynamicPageLoading;
