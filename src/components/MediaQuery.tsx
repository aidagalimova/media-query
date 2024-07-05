import { useMediaQuery, useMediaQueryPropsType } from "../hooks/useMediaQuery";
type ResolutionType = `${number}dppx` | number;

interface MediaQueriesProps {
  orientation?: string;
  minResolution?: ResolutionType;
  maxResolution?: ResolutionType;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

interface MediaQueryProps extends MediaQueriesProps {
  children: ((matches: boolean) => React.ReactNode) | React.ReactNode;
}
const camelToKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

function getQueryValue(prop: string, propValue: string | number) {
  if (typeof propValue !== "number") {
    return propValue;
  } else {
    if (prop !== "minResolution" && prop !== "maxResolution") {
      return `${propValue}px`;
    } else {
      return `${propValue}dppx`;
    }
  }
}

function getUseMediaQueryArgs(props: MediaQueriesProps) {
  const result: useMediaQueryPropsType = {};
  for (const prop in props) {
    const propValue = props[prop as keyof typeof props];
    if (propValue !== undefined) {
      const queryType = camelToKebabCase(prop);
      const queryValue = getQueryValue(prop, propValue);
      result[prop] = `(${queryType}: ${queryValue})`;
    }
  }
  return result;
}

const MediaQuery = ({ children, ...mediaQueries }: MediaQueryProps) => {
  const isMatches = useMediaQuery(getUseMediaQueryArgs(mediaQueries));
  return (
    <>
      {typeof children === "function" && children(isMatches)}
      {typeof children !== "function" && isMatches && children}
    </>
  );
};
export default MediaQuery;
