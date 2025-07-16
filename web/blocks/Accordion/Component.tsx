import Container from "@/components/ui/container";
import { Accordion as AccordionType } from "@/payload-types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionBlock = ({ block }: { block: AccordionType }) => {
  return (
    <Container className="items-center gap-8">
      <h2 className="text-center text-3xl font-bold">{block.title}</h2>
      <Accordion type="single" collapsible className="w-full max-w-lg">
        {block.content?.map((item) => (
          <AccordionItem value={item.id || ""} key={item.id}>
            <AccordionTrigger className="hover:cursor-pointer">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        )) || <p>No content available</p>}
      </Accordion>
      {/* Here you can implement the accordion functionality using state and event handlers */}
      {/* Example: map through content and display triggers and content */}
    </Container>
  );
};

export default AccordionBlock;
