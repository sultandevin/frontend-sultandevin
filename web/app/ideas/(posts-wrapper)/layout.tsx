import Container from "@/components/ui/container";
import PerPageFilter from "@/lib/modules/ideas/filters/per-page-filter";
import SortByFilter from "@/lib/modules/ideas/filters/sort-by-filter";
import IdeasHero from "@/lib/modules/ideas/ideas-hero";
import ChildrenWrapper from "./children-wrapper";

const PostsFilterWrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      <IdeasHero />
      <Container className="flex-row gap-8 pb-0">
        <div className="ml-auto flex items-center gap-1">
          Show per page:
          <PerPageFilter />
        </div>

        <div className="flex items-center gap-1">
          Sort by:
          <SortByFilter />
        </div>
      </Container>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </>
  );
};

export default PostsFilterWrapper;
