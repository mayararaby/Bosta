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

  console.log({packageInfo})
  return (
    <>
      <Header />
      {Object.keys(packageInfo).length ? <DetailsCard /> :<div className='noResultContainer'><img src={noResult} alt='no-result' /></div>}
      {loading ? <div className='parentLoading'>
        <Loading />
      </div> : <></>}

    </>
  )
}

export default withLocalize(Home);