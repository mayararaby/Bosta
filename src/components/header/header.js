import React, { useEffect, useState } from 'react'
import LogoRight from '../../assetes/bostaLogo.png'
import './header.css'
import LogoLeft from '../../assetes/enlogo.png'
import { LeftArrow, RightArrow } from '../../assetes/headerArrows'
import TrackingSearch from '../trackingSearch/trackingSearch'
import LanguageMenu from '../languageMenu/languageMenu'
import withLocalize from '../../hoc/withLocalize'
import { useSelector } from 'react-redux'
import { SnackbarCustom } from '../snackbar/snackbar'
const Header = ({ t }) => {
  const [showComponent, setShowComponent] = useState(false)
  const [open, setOpen] = useState(false);

  const showTrackingComponent = () => setShowComponent(!showComponent)
  const selectedLanguage = useSelector(state => state.local)
  const trackingResult = useSelector(state => state.trackingResult)

  useEffect(() => {
    setOpen(!trackingResult);
  }, [trackingResult]);

  return (
    <>

      <div className='headerContainer' style={{ direction: `${selectedLanguage === 'en' ? 'ltr' : 'rtl'}` }}>


        <div className='logo'>
          {selectedLanguage === 'ar' && <img className='imgLogo' src={LogoRight} alt='logo' />}
          {selectedLanguage === 'en' && <img className='imgLogo' src={LogoLeft} alt='logo' />}

        </div>


        <div className='middleSection headerTxtSection'>
          <label>
            {t('home')}
          </label>
          <label>
            {t('prices')}
          </label>
          <label>
            {t('contactUs')}
          </label>
        </div>

        <div className='lastSection headerTxtSection'>
          <label className={`trackingSection ${showComponent && 'borderShadow'}`}>
            <span className='redTextColor tracking-text' onClick={showTrackingComponent} >
              {t('trackShipment')}
            </span>
            {selectedLanguage === 'ar' && <LeftArrow />}
            {selectedLanguage === 'en' && <RightArrow />}

            {
              showComponent && <TrackingSearch setShowComponent={setShowComponent} />
            }
          </label>
          <label>{t('login')}</label>
          <LanguageMenu />
        </div>

      </div>
      <div className='line'></div>
      {!trackingResult && (
        <SnackbarCustom statue='error' message={t('wrongTrackNo')} open={open} setOpen={setOpen} />
      )}
    </>
  )
}

export default withLocalize(Header)