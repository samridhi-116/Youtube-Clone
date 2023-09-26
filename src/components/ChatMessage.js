import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex flex-row justify-start mt-2 w-full'>
        <div className='mr-3 w-[8%]'>
            <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt='user' className='w-7 h-7'/>
        </div>
        <div className='flex w-[85%]'>
            <p className='mr-2 font-sans font-medium text-sm text-gray-500'>{name}</p>
            <p className='font-sans font-normal text-sm'>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage;