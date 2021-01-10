import React, { useEffect, useState, useCallback } from "react"
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css"
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {

  // state ={} 와 같음. [변수명,변화를 적용할 변수명]
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)

  // app이 전체를 리렌더링 할때 app의 오브젝트가 바껴서 header에서 memo를 써도
  // app의 object의 ref props주소가 변경이 되어서
  // memo를 쓴 의미가 사라짐. 그래서 useCallbakc을씀
  const home = useCallback(() => {
    console.log("home");
    setSelectedVideo(null)
    setVideos([])
    youtube//
      .mostPopular() //
      .then(videos => setVideos(videos))
  }, [youtube])

  const search = useCallback(query => {
    console.log("search");
    youtube//
      .search(query)//
      .then(videos => setVideos(videos))
  }, [youtube])

  const selectVideo = (video) => {
    console.log("select");
    setSelectedVideo(video)
  }


  // didmount upadate의 2가지 기능을 가지고있음 , 2번째 인자는 어떤것이 업데이트될때 2가지 기능을 업데이트할건지 정함
  useEffect(() => {
    console.log("useEffect");
    youtube//
      .mostPopular() //
      .then(videos => setVideos(videos))
  }, [youtube])

  console.log("app");
  return (
    <div className={styles.app}>
      <Header onSearch={search} onHomeClick={home} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} />
        </div>
      </section>
    </div>
  )
}

export default App