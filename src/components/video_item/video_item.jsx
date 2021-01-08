import React from 'react';

const VideoItem = ({ videos: { snippet: { title, thumbnails } } }) => (
    <div className="">
        <img src={thumbnails.medium.url}></img>
        <li>{title}</li>
    </div>

);

export default VideoItem;