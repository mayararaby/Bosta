import React from 'react'
import Header from '../../components/header/header'
import './home.css'
import withLocalize from '../../hoc/withLocalize'
import DetailsCard from '../../components/detailsCard/detailsCard'
import { useSelector } from 'react-redux'
import { Loading } from '../../components/loading/loading'
import noResult from '../../assetes/noResult.png'
const Home = () => {
  const packageInfo = useSelector(state => state.packageInfo)
  const loading = useSelector(state => state.loading)

  return (
    <>
      <Header />
      {/* 
        if there is result for provided tracking number from user will display it of not will display a placeholder image
      */}
      {Object.keys(packageInfo).length ? <DetailsCard /> :<div className='noResultContainer'><img src={noResult} alt='no-result'  className='no-resultImage'/></div>}
      {/* Lazy load component display it when request is still pending  */}
      {loading ? <div className='parentLoading'>
        <Loading />
      </div> : <></>}
      

    </>
  )
}

export default withLocalize(Home);