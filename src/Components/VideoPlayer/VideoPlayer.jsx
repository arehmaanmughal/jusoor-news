import React, { useRef, useState } from "react";

import MyVideo from "../../assets/myvideo.mp4";


const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handlePlayButtonClick = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="row">
        <div className="col position-relative">
          <video
            style={{ height: "400px", width: "100%", borderRadius: "20px" }}
            preload="auto"
            ref={videoRef}
            loop
          >
            <source src={MyVideo} type="video/mp4" />
          </video>
          <div className="position-absolute top-0 end-25">
            <button
              className={`  button-style  play-button control-button ${
                isPlaying ? "active" : ""
              }`}
              onClick={handlePlayButtonClick}
            >
              {isPlaying ? (
                <span>Pause</span>
              ) : (
                <span>Play</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoPlayer;