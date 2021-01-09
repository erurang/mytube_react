import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <>
            <iframe id="ytplayer" type="text/html" width="720" height="405"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0" allowFullScreen></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.channelTitle}</p>
            <span>{video.snippet.description}</span>
        </>
    )
};

export default VideoDetail;