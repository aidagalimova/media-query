export type ResolutionType = `${number}dppx` | number;
export type OrientationType = "portrait" | "landscape";

export type useMediaQueryType = {
  [key: string]: `(${MediaQueryValues}: ${string})`;
};

export interface MediaQueries {
  orientation?: OrientationType;
  minResolution?: ResolutionType;
  maxResolution?: ResolutionType;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}
export enum MediaQueryValues {
  orientation = "orientation",
  minResolution = "min-resolution",
  maxResolution = "max-resolution",
  minWidth = "min-width",
  maxWidth = "max-width",
  minHeight = "min-height",
  maxHeight = "max-height",
}

export enum Units {
  px = "px",
  dppx = "dppx",
}
