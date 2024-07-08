import { useEffect, useState } from "react";
import { useMediaQueryType } from "../types";

export const useMediaQuery = (props: useMediaQueryType) => {
  const mediaQueries = Object.values(props).join(" and ");

  const [mediaQueryMatches, setMediaQueryMatches] = useState(
    window.matchMedia(mediaQueries).matches
  );

  const handleChange = (e: MediaQueryListEvent) => {
    setMediaQueryMatches(e.matches);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueries);
    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [mediaQueries]);

  return mediaQueryMatches;
};
