import { useMediaQuery } from "../hooks/useMediaQuery";

export const HookTest = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isDesktopAndPortrait = useMediaQuery({
    query: "(min-width: 1224px)",
    query2: "(orientation: landscape)",
  });

  return (
    <div>
      <h2>Hook test</h2>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
      {isRetina && <p>You are retina</p>}
      {isDesktopAndPortrait && (
        <p>You have desktop and you are in landscape orientation</p>
      )}
    </div>
  );
};
