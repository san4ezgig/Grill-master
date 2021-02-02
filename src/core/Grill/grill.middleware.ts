import { PayloadAction } from "@reduxjs/toolkit";
import { addItems } from "./grill.actions";
import { AnyAction, Dispatch } from "redux";
import { GrillData, GrillItem } from "./grill.interfaces";
import { Table } from "./Table";

export const grillMiddleware = () => (next: Dispatch<AnyAction>) => (action: PayloadAction<GrillData>) => {
  const { type, payload } = action;
  if (type === addItems.type) {
    const { width, height, grillItems } = payload;

    const sortedItems = (grillItems || [])
      .reduce((acc: GrillItem[], item) => [...acc, ...Array(item.count).fill(item)], [])
      .sort((first, second) => {
        return second.width * second.height - first.width * first.height;
      })

    const grillTable = new Table([width, height]);

    const items = sortedItems.reduce((acc: any, item: GrillItem) => {
      let {
        grillItems,
        itemsOutOfGrill,
      } = acc;

      const tableItem = grillTable.insertRectangle(item);

      if (tableItem) {
        return {
          itemsOutOfGrill,
          grillItems: [...grillItems, {
            title: tableItem.title,
            startCoordinatesByX: tableItem.startCoordinatesByX,
            startCoordinatesByY: tableItem.startCoordinatesByY,
            height: tableItem.height,
            width: tableItem.width,
          }]
        }
      }

      return {
        grillItems,
        itemsOutOfGrill: [...itemsOutOfGrill, item]
      }
    }, { grillItems: [], itemsOutOfGrill: [] });

    next({
      type,
      payload: {
        width,
        height,
        items,
      }
    })
  }
};
