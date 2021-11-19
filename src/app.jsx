import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const seletVideo = useCallback((video) => {
    setSelectedVideo(video);
    // console.log(video);
  }, []);
  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      // loading... 이쯤에 구현
      youtube.search(query).then((item) => setVideos(item));
    },
    [youtube],
  );

  useEffect(() => {
    youtube.mostPopular().then((item) => setVideos(item));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={seletVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
