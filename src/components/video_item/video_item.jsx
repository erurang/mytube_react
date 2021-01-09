import React from 'react';


import styles from "./video_item.module.css"


const VideoItem = ({ onVideoClick, videos, videos: { snippet: { title, thumbnails, channelTitle } } }) => {
    console.log(videos);
    return (
        <li className={styles.container} onClick={() => onVideoClick(videos)}>
            <div className={styles.video} >
                <img className={styles.thumbnail} src={thumbnails.medium.url} alt={title}></img>
                <div className={styles.metadata}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.channel}>{channelTitle}</p>
                </div>
            </div>
        </li>
    )


};

export default VideoItem;