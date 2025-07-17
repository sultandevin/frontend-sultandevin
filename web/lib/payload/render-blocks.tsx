import React from "react";
import { blockComponents } from "@/blocks";

/**
 * Renders a block from Payload CMS
 *
 * @param block The block to render
 * @returns A React component for the block
 */
export const RenderBlock = ({ block }: { block: any }) => {
  if (!block) return null;

  // Get the component for this block type
  const BlockComponent = blockComponents[block.blockType];

  // If the component doesn't exist, return nothing
  if (!BlockComponent) {
    // For development, show which component is missing
    if (process.env.NODE_ENV === "development") {
      return (
        <div
          style={{
            padding: "20px",
            margin: "20px 0",
            background: "#FFF0F0",
            color: "#FF0000",
            border: "1px dashed #FF0000",
          }}
        >
          <h3>Missing Block Component</h3>
          <p>
            No component found for block type: <code>{block.blockType}</code>
          </p>
        </div>
      );
    }
    return null;
  }

  // Return the component with the block data
  return <BlockComponent block={block} />;
};

/**
 * Renders an array of blocks from Payload CMS
 *
 * @param blocks Array of blocks to render
 * @returns React components for each block
 */
export const RenderBlocks = ({ blocks }: { blocks: any[] }) => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => (
        <RenderBlock key={`block-${index}`} block={block} />
      ))}
    </>
  );
};

export default RenderBlocks;
