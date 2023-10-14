import React from 'react'
import './detailsCard.css'
import { useSelector } from 'react-redux'
import { _performDate } from '../../services'
import { packageStatus, StatusColors } from '../../constants/index'
import withLocalize from '../../hoc/withLocalize'
import StepperComponent from '../stepper/stepper'
import DetailsPackage from '../detailsPackage/detailsPackage'
import DeliverDetails from '../deliverDetails/deliverDetails'

const DetailsCard = ({ t }) => {
  const packageInfo = useSelector(state => state.packageInfo)
  const selectedLanguage = useSelector(state => state.local)

  const { provider, TrackingNumber, CurrentStatus, PromisedDate, TransitEvents } = packageInfo
  const { state, timestamp } = CurrentStatus

  return (
    <>
      <div className='detailsCardContainer' style={{direction:`${selectedLanguage==='en'?'ltr':'rtl'}`}}>

        <div className='packageInfoContainer'>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'> {`${t('trackingNo')} - ${TrackingNumber}`}</div>
            <div className={`bold ${StatusColors[state]}`}>{t(packageStatus[state])}</div>
          </div>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>{t('lastUpdate')}</div>
            <div className='bold'>{_performDate(timestamp)}</div>
          </div>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>{t('seller')}</div>
            <div className='bold'>{provider}</div>
          </div>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>{t('deliveredTime')}</div>
            <div className='bold'>{_performDate(PromisedDate)}</div>
          </div>
        </div>
        <div className='line'></div>
        <StepperComponent TransitEvents={TransitEvents} t={t} />


      </div>
      <div className='detailsContainer'  style={{direction:`${selectedLanguage==='en'?'ltr':'rtl'}`}} >
        <DetailsPackage TransitEvents={TransitEvents} t={t} />
        <DeliverDetails t={t} />
      </div>
    </>
  )
}

export default withLocalize(DetailsCard)