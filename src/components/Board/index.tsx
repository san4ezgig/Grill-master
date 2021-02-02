import React from 'react';
import { Box, Tooltip } from "@material-ui/core";
import { GrillItem } from "../../core/Grill/grill.interfaces";
import { useSelector } from "react-redux";
import { green400, grey400 } from "../../styles/colors";

// @ts-ignore
const selector = ({ grill: { height, width, items: { grillItems } } }): { height: number, width: number, grillItems: GrillItem[] } => ({
  height,
  width,
  grillItems,
})

const Board = () => {
  const { width, height, grillItems } = useSelector(selector);

  return (
    <Box borderRadius={12} width={(width || 400) + 8} height={(height || 200) + 8}
         bgcolor={grey400}
         position="relative" p="4px 2px 2px 4px">
      <Box position="absolute">
        {(grillItems || []).map((item: GrillItem, i: number) => {
          const key = `${i}, ${item.title}`;

          return <Tooltip key={key} title={item.title as string}>
            <Box
              width={`${item.width}px`}
              height={`${item.height}px`}
              left={item.startCoordinatesByX}
              top={item.startCoordinatesByY}
              borderRadius={8}
              border="1px solid"
              position="absolute"
              bgcolor={green400}
            />
          </Tooltip>
        })}
      </Box>
    </Box>
  );
};

export default Board;
