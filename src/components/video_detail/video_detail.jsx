import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type='text/html'
        title='youtube video player'
        width='100%'
        height='500'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className={styles.videoInfo}>
        <h3>{video.snippet.title}</h3>
        <h4>{video.snippet.channelTitle}</h4>
        <h5>{video.snippet.publishedAt}</h5>
        <pre>{video.snippet.description}</pre>
        <p>{video.snippet.tags}</p>

        <div className={styles.sublist}></div>
      </div>
    </section>
  );
};

export default VideoDetail;
