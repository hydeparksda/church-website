import React from "react";
import "./HomeVideoBackground.css";
import Video from "react-responsive-video";
import vid from "../../Videos/hydeparkvideo.mp4";
import JoinUs from "../JoinUs/JoinUs";

const HomeVideoBackground = () => {
  return (
    <div className="video-container">
      {/* <Video className="background_video" mp4={vid} /> */}
      <video autoPlay muted loop id="myVideo">
        <source src={vid} type="video/mp4" />
      </video>
      <div class="content">
        <JoinUs />
      </div>
    </div>
  );
};

export default HomeVideoBackground;
