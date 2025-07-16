import Container from "@/components/ui/container";
import PerPageFilter from "@/lib/modules/ideas/filters/per-page-filter";
import SortByFilter from "@/lib/modules/ideas/filters/sort-by-filter";
import IdeasHero from "@/lib/modules/ideas/ideas-hero";
import ChildrenWrapper from "./children-wrapper";
import { Suspense } from "react";

const PostsFilterWrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      <IdeasHero />
      <Container className="items-end sm:flex-row sm:items-center sm:gap-8 sm:pb-0">
        <div className="flex items-center gap-1 sm:ml-auto">
          Show per page:
          <Suspense fallback={null}>
            <PerPageFilter />
          </Suspense>
        </div>

        <div className="flex items-center gap-1">
          Sort by:
          <Suspense fallback={null}>
            <SortByFilter />
          </Suspense>
        </div>
      </Container>
      <Suspense fallback={null}>
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
      </Suspense>
    </>
  );
};

export default PostsFilterWrapper;
