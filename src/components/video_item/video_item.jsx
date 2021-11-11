import React from "react";

const VideoItem = (props) => {
  // const [title] = props.video.snippet;
  return (
    <li>
      <h1>{props.video.snippet.title}</h1>
      <img src="http://placehold.it/200x200" alt="" />
    </li>
  );
};

export default VideoItem;
