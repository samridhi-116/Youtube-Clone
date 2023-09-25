import React from 'react';
import YtShorts from '../assets/youtube-shorts-logo-15252.png';
import history from '../assets/history.png'
import clip from '../assets/clips.png'
import { Link } from 'react-router-dom';

const Sidebar = ({ isMenuOpen }) => {
  if(!isMenuOpen) return null; //called early return pattern (we can do conditional rendering too)
  
  return (
    <div className={`z-50 fixed top-14 left-0 h-full pb-4 px-4 overflow-y-scroll w-[19%] bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

      <ul className='font-sans font-normal text-base text-left leading-loose'>
        <Link to='/'>
          <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
          <img className='w-5 h-5 mr-6' src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3217040/house-icon-md.png' alt='home'/>
          Home</li>
        </Link>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
          <img className='w-5 h-5 mr-6' src={YtShorts} alt='shorts'/>
          Shorts</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
          <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png' alt='subscription'/>
          Subscriptions</li>
      </ul>
      <hr className='my-4'/>
      <ul className='font-sans font-normal text-base text-left leading-loose'>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
          <img className='w-5 h-5 mr-6' src='https://static.thenounproject.com/png/2481186-200.png' alt='subscription'/>
          Library</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
          <img className='w-5 h-5 mr-6' src={history} alt='history'/>
          History</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp' alt='history'/>
          Watch Later</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://icon-library.com/images/youtube-video-icon-png/youtube-video-icon-png-27.jpg' alt='history'/>
          Your Videos</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src={clip} alt='history'/>
          Your Clips</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://www.pngitem.com/pimgs/m/136-1365991_like-thumb-up-thumbup-agree-admit-yes-youtube.png' alt='history'/>
          Liked Videos</li>
      </ul>
      <hr className='my-4'/>
      <h1 className=' ml-3 font-sans font-semibold text-lg leading-loose'>Subscriptions</h1>
      <ul className='font-sans font-normal text-base text-left leading-loose'>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='history'/>
          Moonlight</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='history'/>
          Adele</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='history'/>
          Akash Gupta</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='history'/>
          Akshay Saini</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='history'/>
          GFX</li>
      </ul>
      <hr className='my-4'/>
      <h1 className='ml-3 font-sans font-semibold text-lg leading-loose'>Explore</h1>
      <ul className='font-sans font-normal text-base text-left leading-loose'>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://icon-library.com/images/trending-icon/trending-icon-2.jpg' alt='history'/>
          Trending</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://icon-library.com/images/white-shopping-bag-icon-for-pc/white-shopping-bag-icon-for-pc-0.jpg' alt='history'/>
          Shopping</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png' alt='history'/>
          Music</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.icon-icons.com/icons2/1933/PNG/512/iconfinder-video-film-camera-movie-photography-4593167_122280.png' alt='history'/>
          Films</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn-icons-png.flaticon.com/512/2989/2989838.png' alt='history'/>
          Live</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png?f=webp' alt='history'/>
          Gaming</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://icons.iconarchive.com/icons/iconsmind/outline/512/Newspaper-icon.png' alt='history'/>
          News</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn-icons-png.flaticon.com/512/18/18631.png' alt='history'/>
          Sport</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://www.svgrepo.com/show/6555/light-bulb.svg' alt='history'/>
          Learning</li>
      </ul>
      <hr className='my-4'/>
      <ul className='font-sans font-normal text-base text-left leading-loose'>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn.iconscout.com/icon/free/png-256/free-youtube-studio-4560393-3789457.png' alt='history'/>
          Settings</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn3.iconfinder.com/data/icons/whatsapp-5/512/129_Basic_Flag_Ui-512.png' alt='history'/>
          Report history</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://w7.pngwing.com/pngs/317/872/png-transparent-youtube-play-button-computer-icons-help-text-trademark-sign.png' alt='history'/>
          Help</li>
        <li className='px-4 hover:bg-gray-100 rounded-lg flex items-center my-2'>
        <img className='w-5 h-5 mr-6' src='https://cdn0.iconfinder.com/data/icons/complete-common-version-2-5/1024/feedback4-512.png' alt='history'/>Feedback</li>
      </ul>

    </div>
  )
}

export default Sidebar;