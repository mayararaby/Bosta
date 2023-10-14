import React from 'react'
import Header from '../../components/header/header'
import './home.css'
import withLocalize from '../../hoc/withLocalize'
import DetailsCard from '../../components/detailsCard/detailsCard'
import { useSelector } from 'react-redux'
const Home = (props) => {
  const packageInfo = useSelector(state => state.packageInfo)

  return (
    <>
      <Header />
      {Object.keys(packageInfo).length?<DetailsCard />:<></>}
    </>
  )
}

export default withLocalize(Home);