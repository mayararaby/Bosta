import React from 'react'
import Header from '../../components/header/header'
import './home.css'
import withLocalize from '../../hoc/withLocalize'
import DetailsCard from '../../components/detailsCard/detailsCard'
const Home = (props) => {

  return (
    <>
      <Header />
      <DetailsCard />
    </>
  )
}

export default withLocalize(Home);