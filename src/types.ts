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

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

type AtLeastOneMediaQuery = RequireAtLeastOne<MediaQueries>;
interface ChildrenProp {
  children: ((matches: boolean) => React.ReactNode) | React.ReactNode;
}
export type MediaQueryProps = AtLeastOneMediaQuery & ChildrenProp;
