import React, { useEffect, useState } from "react"
import VideoList from "./components/video_list/video_list";

function App() {

  // state ={} 와 같음. [변수명,변화를 적용할 변수명]
  const [videos, setVideos] = useState([]);

  // didmount upadate의 2가지 기능을 가지고있음 , 2번째 인자는 어떤것이 업데이트될때 2가지 기능을 업데이트할건지 정함
  useEffect(() => {

    // fetch의 기본설정
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=AIzaSyCnPALRYfXJ74c2BugvWhTGefTWhYQEwNQ", requestOptions)
      // response.text 는 text형태로오는데
      // json으로 변경하여 값에 접근하기 더 쉽게변경함
      .then(response => response.json())
      // setVideos로 상태설정을함
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])


  return <VideoList videos={videos} />
}

export default App