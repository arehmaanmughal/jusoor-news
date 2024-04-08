import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src }) => {
  return (
    <div>
      <ReactPlayer
        url={src}
        width="100"
        height="auto"
        playing={false}
        controls={true}
        volume={0.5}
        playbackRate={1}
        loop={false}
        muted={false}
        pip={false}
      />
    </div>
  );
};

export default VideoPlayer;
