import React, { useState, useEffect } from "react";
import "./app.css";
import Search from "./components/search";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC4nZ027bNNsinAhc0yDnF62b6C_FefkDE",
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        // console.log(videos);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Search />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
