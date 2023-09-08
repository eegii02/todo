import React from 'react';
import '../index.css'
import Button from './Button';

const Header = ({text}) => {
  return (
    <header className='header'>
      <h1>{text}</h1>
      <Button color='green' text='ADD'/>
    </header>
  )
}

export default Header
