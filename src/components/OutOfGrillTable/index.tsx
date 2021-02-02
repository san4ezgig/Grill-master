import React from 'react';
import { Table, TableHead, TableRow, TableCell, Box, TableBody } from '@material-ui/core';
import { useSelector } from "react-redux";
import { GrillItem } from "../../core/Grill/grill.interfaces";
import { grey200 } from "../../styles/colors";


const selector = (state: any) => state.grill.items.itemsOutOfGrill;
const OutOfGrillTable = () => {
  const itemsOutOfGrill = useSelector(selector);

  return (
    <Box
      maxHeight={400}
      overflow="auto"
      minHeight={300}
      minWidth={300}
      border={`1px solid ${grey200}`}
      borderRadius={12}
    >
      <Box bgcolor={grey200} p={1} borderRadius="12px 12px 0 0">
        Items out of grill ({itemsOutOfGrill.length} items)
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Box fontWeight="fontWeightBold">
                Type
              </Box>
            </TableCell>
            <TableCell>
              <Box fontWeight="fontWeightBold">
                Size
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(itemsOutOfGrill || []).map((item: Partial<GrillItem>, i: number) => {
            const key = `${i}, ${item.title}`;

            return <TableRow key={key}>
              <TableCell>
                {item.title}
              </TableCell>
              <TableCell>
                {item.width}x{item.height}
              </TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OutOfGrillTable;
