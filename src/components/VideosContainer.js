import React, { useEffect, useState } from 'react';
import { youtubeAPI } from '../utils/constants';
import VideoCards, {AdVideoCard} from './VideoCards';
import { Link } from 'react-router-dom';

const VideosContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
      getVideos();
    },[])

    const getVideos = async () => {
      const data = await fetch( youtubeAPI );
      const json = await data.json();
      setVideos(json?.items);
    }

    return (
      <div className='flex flex-row flex-wrap justify-start relative top-10'>
        {videos[0] && <AdVideoCard videosInfo={videos[0]}/>}
        {videos?.map(video => (
            <Link to={'/watch?v=' + video.id} className='mt-4 mb-3 ml-4 w-[31.95%]'>
              <VideoCards key={video.id} videosInfo={video}/>
            </Link>
          )
        )}
      </div>
    )
}

export default VideosContainer;