import React from 'react'
import Button from './Button'

const ButtonsList = () => {
  return (
    <div className='w-full bg-white fixed z-[2]'>
      <div className='py-3 px-2 flex'>
        <Button name="All"/>
        <Button name="Mixes"/>
        <Button name="Lana Del Rey"/>
        <Button name="Music"/>
        <Button name="Live"/>
        <Button name="Cricket"/>
        <Button name="Sitcoms"/>
        <Button name="JavaScript"/>
        <Button name="Lo-fi"/>
        <Button name="Mantras"/>
        <Button name="News"/>
        <Button name="Cooking Shows"/>
        <Button name="Gaming"/>
      </div>
    </div>
  )
}

export default ButtonsList