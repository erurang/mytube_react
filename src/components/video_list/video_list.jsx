import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from "./video_list.module.css"

const VideoList = memo(({ videos, onVideoClick }) => {
    console.log("list");
    return (

        <ul className={styles.videos}>
            { videos.map(video => <VideoItem key={video.id} videos={video} onVideoClick={onVideoClick} />)}
        </ul >
    )
})

export default VideoList;