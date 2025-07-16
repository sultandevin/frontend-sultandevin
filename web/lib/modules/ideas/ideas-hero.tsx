import { getIdeasPage } from "@/lib/payload/utils";
import { IdeasHeroClient } from "./ideas-hero.client";

const IdeasHero = async () => {
  const page = await getIdeasPage();

  return <IdeasHeroClient page={page} />;
};

export default IdeasHero;
