import React from 'react'
import { Header } from '../../components/header/header'
import './home.css'
import withLocalize from '../../hoc/withLocalize'
const Home = (props) => {
console.log({props})


  return (
    <>
      <Header />

    </>
  )
}

export default withLocalize(Home);