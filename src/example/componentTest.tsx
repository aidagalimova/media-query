import MediaQuery from "../components/MediaQuery";

export const ComponentTest = () => (
  <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {(matches) =>
        matches ? <p>You are retina</p> : <p>You are not retina</p>
      }
    </MediaQuery>

    <MediaQuery minWidth={1224} orientation={"landscape"}>
      {(matches) =>
        matches && <p>You have desktop and you are in landscape orientation</p>
      }
    </MediaQuery>
  </div>
);
