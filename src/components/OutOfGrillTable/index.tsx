import React from 'react';
import { Table, TableHead, TableRow, TableCell, Box, TableBody } from '@material-ui/core';
import { grey } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { GrillItem } from "../../core/Grill/grill.interfaces";

const headerColor = grey[300];
const selector = (state: any) => state.grill.items.itemsOutOfGrill;
const OutOfGrillTable = () => {
  const itemsOutOfGrill = useSelector(selector);

  return (
    <Box minHeight={300} minWidth={300} border={`1px solid ${headerColor}`} borderRadius={12}>
      <Box bgcolor={headerColor} p={1} borderRadius="12px 12px 0 0">
        Items out of grill
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
          {itemsOutOfGrill.map((item: Partial<GrillItem>, i: number) => {
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
