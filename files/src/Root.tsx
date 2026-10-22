import { Composition } from "remotion";
import { NewsShortVideo } from "./NewsShortVideo";

export const Root = () => {
  return (
    <Composition
      id="NewsShortVideo"
      component={NewsShortVideo}
      durationInFrames={25 * 30}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{}}
    />
  );
};