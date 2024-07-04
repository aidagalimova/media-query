import { useEffect, useState } from "react";

interface useMediaQueryProps {
  query: string;
}

export const useMediaQuery = (props: useMediaQueryProps) => {
  const [mediaQueryMatches, setMediaQueryMatches] = useState(
    window.matchMedia(props.query).matches
  );

  const handleChange = (e: MediaQueryListEvent) => {
    setMediaQueryMatches(e.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(props.query);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.addEventListener("change", handleChange);
  }, [props.query]);

  return mediaQueryMatches;
};
