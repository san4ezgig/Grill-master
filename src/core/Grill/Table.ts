import { GrillItem } from "./grill.interfaces";

export class Table {
  coordinates: Array<number>;
  child: Array<Table> = [];
  title?: string;

  get startCoordinatesByX() {
    return this.coordinates[0];
  }

  get startCoordinatesByY() {
    return this.coordinates[1];
  }

  get endCoordinateByX() {
    return this.coordinates[2];
  }

  get endCoordinateByY() {
    return this.coordinates[3];
  }

  get width() {
    return this.endCoordinateByX - this.startCoordinatesByX;
  }

  get height() {
    return this.endCoordinateByY - this.startCoordinatesByY;
  }

  constructor(coordinates: Array<number>, title?: string) {
    if (coordinates.length === 2) {
      this.coordinates = [0, 0, ...coordinates];
    } else {
      this.coordinates = coordinates
    }

    this.title = title;
  }

  insertRectangle(grillItem: GrillItem): Table | null {
    if (this.child.length) {
      return this.child[0].insertRectangle(grillItem) || this.child[1].insertRectangle(grillItem);
    }

    const {
      width,
      height,
      title
    } = grillItem;

    const newTable = new Table([width, height]);

    if (this.width >= newTable.width && this.height >= newTable.height) {
      this.child = [
        new Table([this.startCoordinatesByX + newTable.width, this.startCoordinatesByY, this.endCoordinateByX, newTable.height + this.startCoordinatesByY]),
        new Table([this.startCoordinatesByX, this.startCoordinatesByY + newTable.height, this.endCoordinateByX, this.endCoordinateByY]),
      ]

      return new Table([this.startCoordinatesByX, this.startCoordinatesByY, newTable.width + this.startCoordinatesByX, newTable.height + this.startCoordinatesByY], title);
    }

    return null;
  }
}