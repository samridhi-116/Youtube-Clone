import React, { useEffect, useState } from 'react';
import {LiaBarsSolid, LiaSistrix} from 'react-icons/lia'
import {CiBellOn} from 'react-icons/ci'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector  } from 'react-redux';
import { youtubeSearchAPI } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState();
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);
 
  useEffect(()=>{
    //make an api call for every key press
    // but if the diffenrence bw the 2 api's is <200ms
    // decline that api request
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]); 
      }else{
        getSearchSuggestions()
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(youtubeSearchAPI + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //Update cache
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }))
  }
  
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`w-full fixed z-10 top-0 left-0 right-0 bg-white ${isMenuOpen ? 'sidebar-open' : ''}`}>
      <div className='flex flex-row justify-between py-2 w-[96%] mx-auto'>
        <div className='flex w-[16%] items-center'>
          <LiaBarsSolid className='p-2 w-10 h-10 text-2xl cursor-pointer hover:bg-gray-100 hover:rounded-full' onClick={() => toggleMenuHandler()}/>
          <Link to='/'>
            <img 
              src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png' 
              alt='yt-icon' 
              className='w-24 h-5 mx-6'/>
          </Link>
          
        </div>
        <div className=' w-[57%] flex flex-col'>
            <div className='flex flex-row relative'>
                <input type='text' 
                  placeholder='Search'
                  value={searchQuery}
                  onChange={(e)=> setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setShowSuggestions(false)}
                  className='flex-1 border-[1.4px] border-gray-300 rounded-l-3xl font-sans text-base px-4 py-2 text-slate-800'
                />
                <button className='border-[1.4px] border-gray-300 rounded-r-3xl px-5 py-2 text-black bg-gray-100 text-center'>
                  <LiaSistrix className='font-bold text-lg px-auto'/>
                </button> 
            </div>
            {showSuggestions && (
              <div className='fixed z-30 bg-white w-[49.5%] ml-2 top-14 rounded-xl py-4 shadow-lg drop-shadow-lg'>
                  <ul>
                    {suggestions.map((s)=> (
                      <li className='flex flex-row items-center hover:bg-zinc-100 px-3 font-sans font-medium text-base leading-loose w-full whitespace-nowrap text-ellipsis overflow-hidden'>
                        <LiaSistrix className='font-bold text-base px-auto mx-2'/> {s}
                      </li>
                    ))}
                  </ul>
              </div>
            )}
        </div>
        <div className='flex flex-row justify-between items-center w-[7%]'>
          <CiBellOn className=' text-3xl'/>
          <img src='https://cdn-icons-png.flaticon.com/512/9218/9218712.png' alt='user' className=' w-10 h-10'/>
        </div>
      </div>
    </div>
  )
}

export default Header;