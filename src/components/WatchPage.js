import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
      const [searchParams] = useSearchParams();

      return (
        <div className = 'relative top-14 w-full'>
          <div className = ' w-[86%] mx-auto my-6'>
            <iframe 
              width="675" 
              height="365" 
              src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
              title="YouTube video player" 
              frameBorder="0" 
              allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              className='rounded-xl'
              >
            </iframe>
            <CommentsContainer/>
          </div>
        </div>
      )
    }

export default WatchPage;