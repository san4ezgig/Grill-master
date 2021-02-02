export interface GrillData {
  width: number;
  height: number;
  grillItems: Partial<GrillItem>[];
}

export interface GrillItem {
  width: number;
  height: number;
  count: number;
  title: string;
  startCoordinatesByX: number;
  startCoordinatesByY: number;
}