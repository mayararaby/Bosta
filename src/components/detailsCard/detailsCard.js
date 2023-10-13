import React from 'react'
import './detailsCard.css'
import { useSelector } from 'react-redux'
import { _performDate } from '../../services'
import { packageStatus, StatusColors } from '../../constants/index'
import withLocalize from '../../hoc/withLocalize'
import StepperComponent from '../stepper/stepper'
const DetailsCard = ({ t }) => {
  const packageInfo = useSelector(state => state.packageInfo)
  const { provider, TrackingNumber, CurrentStatus, PromisedDate ,TransitEvents} = packageInfo
  const { state, timestamp } = CurrentStatus

  return (
    <>
      <div className='detailsCardContainer'>

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
        <StepperComponent TransitEvents={TransitEvents} t={t} />

        <div className='line'></div>

      </div>
      <div className='stepperContainer'>
      </div>
    </>
  )
}

export default withLocalize(DetailsCard)