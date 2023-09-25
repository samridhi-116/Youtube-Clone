import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='text-black text-sm font-sans bg-zinc-100 font-normal hover:bg-zinc-200 leading-relaxed px-3 py-1 mx-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button