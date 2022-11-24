import React from "react";
import styledComponents from "styled-components";
import GIF from "../assets/Nfts/video.mp4";
//import homeVideo from "../assets/homeVideo.mp4";

const VideoContainer = styledComponents.div`
 width: 80%;
 height: 
 background-color: #black;
 video{
     width:80%;
     height:auto;
 }
`;

function CoverVideo() {
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay={true} muted={true} loop />
    </VideoContainer>
  );
}

export default CoverVideo;
