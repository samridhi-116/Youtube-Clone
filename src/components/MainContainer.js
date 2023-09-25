import React from 'react'
import ButtonsList from './ButtonsList'
import VideosContainer from './VideosContainer'
import { Link } from 'react-router-dom'
import YtShorts from '../assets/youtube-shorts-logo-15252.png';

const MainContainer = () => {
  return (
    <div className='col-span-12 w-full flex flex-row top-14 relative'>
      <div className='flex flex-col w-[6%] left-0 top-14 fixed bg-white'>
        <ul className='font-sans font-normal text-xs text-center leading-loose ml-1'>
          <Link to='/'>
            <li className='hover:bg-gray-100 rounded-lg justify-center my-2 w-full py-4'>
              <img className='w-5 h-5 mx-auto' src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3217040/house-icon-md.png' alt='home'/>
              Home
            </li>
          </Link>
          <li className='hover:bg-gray-100 rounded-lg justify-center my-2 w-full py-4'>
            <img className='w-5 h-5 mx-auto' src={YtShorts} alt='shorts'/>
            Shorts
          </li>
          <li className='hover:bg-gray-100 rounded-lg justify-center my-2 w-full py-4'>
            <img className='w-5 h-5 mx-auto' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png' alt='subscription'/>
            Subscriptions</li>
          <li className='hover:bg-gray-100 rounded-lg justify-center my-2 w-full py-4'>
            <img className='w-5 h-5 mx-auto' src='https://static.thenounproject.com/png/2481186-200.png' alt='subscription'/>
            Library</li>
        </ul>
      </div>
      <div className='w-[92%] left-20 relative'>
        <ButtonsList/>
        <VideosContainer/>
      </div>
    </div>
  )
}

export default MainContainer;