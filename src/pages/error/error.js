import React from 'react'
import errorImg from '../../assetes/notFond.jpg'
import Header from '../../components/header/header'
import './error.css'
export const Error = () => {
  return (
    <>
      <Header />
      <div className='errorPage'>
      <img src={errorImg} alt='error' />
      </div>
    </>
  )
}

