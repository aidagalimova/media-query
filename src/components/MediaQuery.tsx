import { useMediaQuery } from "../hooks/useMediaQuery";

type MinResolutionType = `${number}dppx` | number;

interface MediaQueryProps {
  orientation?: number;
  minResolution?: MinResolutionType;
  maxResolution?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  children: ((matches: boolean) => React.ReactNode) | React.ReactNode;
}
const camelToKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const MediaQuery = (props: MediaQueryProps) => {
  const { children, minResolution } = props;
  const queryType = camelToKebabCase(Object.keys(props)[0]);
  const queryValue =
    typeof minResolution === "string"
      ? `${minResolution}dppx`
      : `${Object.values(props)[0]}px`;

  const isMatches = useMediaQuery({
    query: `(${queryType}: ${queryValue})`,
  });
  return (
    <>
      {typeof children === "function" && children(isMatches)}
      {typeof children !== "function" && isMatches && children}
    </>
  );
};
export default MediaQuery;
