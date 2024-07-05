import { useEffect, useState } from "react";

export type useMediaQueryPropsType = {
  [key: string]: string;
};

export const useMediaQuery = (props: useMediaQueryPropsType) => {
  const mediaQueriesList = Object.values(props).map((query) =>
    window.matchMedia(query)
  );
  
  const [mediaQueryMatches, setMediaQueryMatches] = useState(
    mediaQueriesList.every((mediaQuery) => mediaQuery.matches)
  );

  const handleChange = (mediaQuery: MediaQueryListEvent) => {
    setMediaQueryMatches(mediaQuery.matches);
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
