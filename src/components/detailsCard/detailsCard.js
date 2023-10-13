import React from 'react'
import './detailsCard.css'
const DetailsCard = () => {
  return (
    <>
      <div className='detailsCardContainer'>

        <div className='packageInfoContainer'>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>رقم الشحنه 1234</div>
            <div className='bold'>لم يتم تسليم الشحنه</div>
          </div>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>أخر تحديث</div>
            <div className='bold'>الأثنين</div>
          </div>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>اسم التاجر</div>
            <div className='bold'>amazon.com</div>
          </div>
          <div className='packageSubInfoContainer'>
            <div className='secondaryColor'>موعد التسليم خلال</div>
            <div className='bold'>3 يناير</div>
          </div>
        </div>
        <div className='line'></div>

      </div>
    </>
  )
}

export default DetailsCard