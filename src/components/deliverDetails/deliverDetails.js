import React from 'react'
import './deliverDetails.css'
import question from '../../assetes/question.jpg'
import Button from '@mui/material/Button';

const DeliverDetails = () => {
  return (
    <>
      <div>
        <div className='detailsPackageContainer'>
          <div className='packageInfoTitle'>عنوان التسليم</div>
          <div className='addressInfo addressInfoBG'> 7  و متفرع من شارع البتنجان الفاهره مصر شارع محمد فرج البتنجاني</div>
        </div>

        <div className='detailsPackageContainer questionContainerImage addressInfo'>
        <div className=''> < img src={question} alt='question' className='imageSizeQuestion' /></div>
          <div className='firstContainerDeliver'>
            <div className='packageInfoTitle'>هل يوجد مشكلة في شحنتك !؟</div>
            <div>
              <button className='dispatchAnProblem'>
                إبلاغ عن مشكلة
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliverDetails