import IdeasPosts from "@/lib/modules/ideas/ideas-posts";

export const metadata = {
  title: "Ideas | Suitmedia",
  description: "Explore various ideas and posts",
};

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
