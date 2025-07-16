import IdeasPosts from "@/lib/modules/ideas/ideas-posts";

const IdeasPage = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <>
      <IdeasPosts searchParams={props.searchParams} />
    </>
  );
};

export default IdeasPage;
