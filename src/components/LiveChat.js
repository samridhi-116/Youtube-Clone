import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import {VscSend} from 'react-icons/vsc';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const ChatMessages = useSelector((store) => store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(25) + "🚀"
            }))
        },1500)
        return () => clearInterval(i);

    },[])

  return (
    <div className='w-full py-2 border border-black rounded-xl h-[365px]'>
        <p className='border-black border-b px-2 py-1'>Chat Message</p>
        <div className='overflow-y-scroll flex flex-col-reverse h-[282px] px-3 py-1'>
            {ChatMessages.map((c) => (
                <ChatMessage 
                    name={c.name}
                    message={c.message}
                />
            ))}
        </div>
        <form className='border-black border-t px-4 py-[5px] flex items-center'
            onSubmit={(e)=>{
                e.preventDefault();
                console.log(liveMessage);
                if(liveMessage.length > 0){
                    dispatch(addMessage({
                        name: "ME",
                        message: liveMessage
                    }));
                }
                setLiveMessage('');
            }}
        >
            <input 
                type='text'
                placeholder='Chat...'
                value={liveMessage}
                onChange={(e)=>
                    setLiveMessage(e.target.value)}
                className=' flex-1 text-sm py-1 px-2 w-4/5 rounded-l-md border border-black'
            />
            <span>
                <button 

                    className='px-2 border border-black py-[5px] rounded-r-md'>
                    <VscSend className=' text-lg'/>
                </button>
            </span>
        </form>
    </div>
  )
}

export default LiveChat;