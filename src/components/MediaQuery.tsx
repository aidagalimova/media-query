import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  MediaQueries,
  MediaQueryValues,
  ResolutionType,
  OrientationType,
  useMediaQueryType,
  Units,
} from "../types";

interface MediaQueryProps extends MediaQueries {
  children: ((matches: boolean) => React.ReactNode) | React.ReactNode;
}

function getQueryValue(
  queryType: MediaQueryValues,
  propValue: OrientationType | ResolutionType | number
) {
  if (typeof propValue !== "number") {
    return propValue;
  } else {
    if (
      queryType !== MediaQueryValues.maxResolution &&
      queryType !== MediaQueryValues.minResolution
    ) {
      return propValue + Units.px;
    } else {
      return propValue + Units.dppx;
    }
  }
}

function getUseMediaQueryArgs(props: MediaQueries) {
  const result: useMediaQueryType = {};
  for (const prop in props) {
    const propValue = props[prop as keyof typeof props];
    if (propValue !== undefined) {
      const queryType = MediaQueryValues[prop as keyof typeof MediaQueryValues];
      const queryValue = getQueryValue(queryType, propValue);
      result[prop] = `(${queryType}: ${queryValue})`;
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
