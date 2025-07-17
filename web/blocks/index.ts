import { Accordion } from "./Accordion/config";
import AccordionBlock from "./Accordion/Component";

import { CallToAction } from "./CallToAction/config";
import CallToActionBlock from "./CallToAction/Component";

import { ContentWithMedia } from "./ContentWithMedia/config";
import ContentWithMediaBlock from "./ContentWithMedia/Component";

import { Features } from "./Features/config";
import FeaturesBlock from "./Features/Component";

import { Header } from "./Header/config";
import HeaderBlock from "./Header/Component";

import { Hero } from "./Hero/config";
import HeroBlock from "./Hero/Component";

import { Testimonials } from "./Testimonials/config";
import TestimonialsBlock from "./Testimonials/Component";

// Export all block configs (for admin panel)
export const blockConfigs = {
  Accordion,
  CallToAction,
  ContentWithMedia,
  Features,
  Header,
  Hero,
  Testimonials,
};

// Export the map of components to be used in frontend rendering
export const blockComponents = {
  accordion: AccordionBlock,
  "call-to-action": CallToActionBlock,
  "content-with-media": ContentWithMediaBlock,
  features: FeaturesBlock,
  header: HeaderBlock,
  hero: HeroBlock,
  testimonials: TestimonialsBlock,
};

export const blocks = {
  config: blockConfigs,
  components: blockComponents,
};

export default blocks;
