import { useState, useEffect } from "react";
import { YouTubeProps } from "react-youtube";

interface PossibleOptions {
  height: string;
  width: string;
  depth: string;
}
const VideoContainer = () => {
  const [opts, setOpts] = useState<YouTubeProps["opts"]>({
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  });

  useEffect(() => {
    const updatePlayerSize = () => {
      setOpts((prevOpts: Partial<PossibleOptions>) => {
        const newOpts = { ...prevOpts };
        if (window.innerWidth < 790) {
          newOpts.height = "390";
          newOpts.width = "100%";
        } else {
          newOpts.height = "490";
          newOpts.width = "70%";
        }

        return newOpts.height !== prevOpts.height ||
          newOpts.width !== prevOpts.width
          ? newOpts
          : prevOpts;
      });
    };

    updatePlayerSize();
    window.addEventListener("resize", updatePlayerSize);

    return () => window.removeEventListener("resize", updatePlayerSize);
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return { opts, onPlayerReady };
};

export default VideoContainer;
