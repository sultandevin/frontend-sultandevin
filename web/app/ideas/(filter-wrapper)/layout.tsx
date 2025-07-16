import IdeasHero from "@/lib/modules/ideas/ideas-hero";

const PostsFilterWrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      <IdeasHero />
      {props.children}
    </>
  );
};

export default PostsFilterWrapper;
