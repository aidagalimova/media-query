import { useEffect, useState } from "react";
import { useMediaQueryType } from "../types";

export const useMediaQuery = (props: useMediaQueryType) => {
  const mediaQueriesList = Object.values(props).map((query) =>
    window.matchMedia(query)
  );

  const [mediaQueryMatches, setMediaQueryMatches] = useState(
    mediaQueriesList.every((mediaQuery) => mediaQuery.matches)
  );

  const handleChange = () => {
    setMediaQueryMatches(
      mediaQueriesList.every((mediaQuery) => mediaQuery.matches)
    );
  };

  useEffect(() => {
    mediaQueriesList.forEach((mediaQueryList) =>
      mediaQueryList.addEventListener("change", handleChange)
    );
    return () =>
      mediaQueriesList.forEach((mediaQueryList) =>
        mediaQueryList.removeEventListener("change", handleChange)
      );
  }, []);

  return mediaQueryMatches;
};
