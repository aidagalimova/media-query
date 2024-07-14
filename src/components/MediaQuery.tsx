import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  MediaQueries,
  MediaQueryValues,
  ResolutionType,
  OrientationType,
  useMediaQueryType,
  Units,
  MediaQueryProps,
} from "../types";

function getQueryValue(
  queryType: MediaQueryValues,
  propValue: OrientationType | ResolutionType | number
) {
  if (typeof propValue !== "number") {
    return propValue;
  } else {
    if (
      queryType === MediaQueryValues.maxResolution ||
      queryType === MediaQueryValues.minResolution
    ) {
      return propValue + Units.dppx;
    } else {
      return propValue + Units.px;
    }
  }
}

function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
  return k in x;
}

function getUseMediaQueryArgs(queries: MediaQueries) {
  const result: useMediaQueryType = {};
  for (const key in queries) {
    if (isKey(queries, key)) {
      const propValue = queries[key];
      if (propValue) {
        const queryType = MediaQueryValues[key];
        const queryValue = getQueryValue(queryType, propValue);
        result[key] = `(${queryType}: ${queryValue})`;
      }
    }
  }
  return result;
}

const MediaQuery = ({ children, ...mediaQueries }: MediaQueryProps) => {
  const isMatches = useMediaQuery(getUseMediaQueryArgs(mediaQueries));
  return (
    <>
      {typeof children === "function"
        ? children(isMatches)
        : isMatches && children}
    </>
  );
};
export default MediaQuery;
