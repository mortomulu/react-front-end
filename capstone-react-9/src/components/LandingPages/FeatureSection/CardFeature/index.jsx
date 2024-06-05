import React from 'react'
import benefitImage from '../../../../assets/imageBenefit.png'

export default function cardBenefit() {
  return (
    <div style={{ backgroundImage: `url(${benefitImage})`, height: `569px`, width: `320px` }} className='flex flex-col justify-center items-center gap-1 pt-64'>
        <div className=''>
            <h1 className='text-2xl font-bold text-white'>Tambak</h1>
        </div>
        <div>
            <h1 className="text-xl font-semibold">Tambak Aquaculture</h1>
        </div>
        <div>
            <p className='text-center'>Menjual berbagai jenis tambak akuakultur yang dapat dipantau realtime</p>
        </div>
    </div>
  )
}
