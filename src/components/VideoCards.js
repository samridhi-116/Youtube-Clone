import React from 'react';

function convertDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
    const hours = parseInt(match[1], 10) || 0;
    const minutes = parseInt(match[2], 10) || 0;
    const seconds = parseInt(match[3], 10) || 0;
  
    let formattedDuration = '';

    if (hours > 0) {
        formattedDuration += hours + ':';
    }
    if (minutes > 0 || hours > 0) {
        formattedDuration += (minutes < 10 ? '0' : '') + minutes + ':';
    }
    formattedDuration += (seconds < 10 ? '0' : '') + seconds;
    return formattedDuration;
}
function formatViewCount(viewCount) {
    if (viewCount >= 1000000) {
      // If the view count is in millions, format it with 'M'
      return `${(viewCount / 1000000).toFixed(1)}M`;
    } else if (viewCount >= 1000) {
      // If the view count is in thousands, format it with 'K'
      return `${(viewCount / 1000).toFixed(1)}K`;
    } else {
      // Otherwise, just display the view count as is
      return viewCount;
    }
}
function timeAgo(timestamp) {
    const currentDate = new Date();
    const pastDate = new Date(timestamp);
    const timeDifference = currentDate - pastDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    if (years > 0) {
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
}

const VideoCards = ( {videosInfo} ) => {
    const { snippet, statistics, contentDetails } = videosInfo;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const formattedDuration = convertDuration(contentDetails.duration);
     return (
        <div>
            <div className=' relative w-full'>
                <img src= {thumbnails.medium.url} alt='video' className='rounded-xl w-full'/>
                <p className=' bg-black opacity-80 font-sans font-medium rounded-md text-white text-sm px-1 absolute bottom-[5px] right-1'>{formattedDuration}</p>
            </div>
            <p className='font-sans font-semibold text-base ml-2 leading-tight mt-2'>{title}</p>
            <p className='mt-1 ml-2 font-sans font-normal text-sm text-zinc-700'>{channelTitle}</p>
            <p className='ml-2 font-sans font-normal text-sm text-zinc-700'>{formatViewCount(statistics.viewCount)} views • {timeAgo(publishedAt)}</p>
        </div>
    )
}

export const AdVideoCard = ({videosInfo}) => {
  return (
    <div className=' border-2 border-red-700 mt-4 mb-3 ml-4 w-[31.95%] rounded-xl'>
      <VideoCards videosInfo={videosInfo}/>
    </div>
  )
}

export default VideoCards;