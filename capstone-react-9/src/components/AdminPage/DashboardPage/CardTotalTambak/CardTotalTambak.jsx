import React from 'react'

export default function CardTotalTambak() {
  return (
    <div style={{ height: '124px', width:'350px' }} className='flex flex-col bg-white py-3 px-4 rounded-2xl border-b-2 border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-sm font-semibold'>Total Tambak</h1>
          </div>
          <div className=''>
            <a className='text-primary-90 rounded-lg' href="">Detail</a>
          </div>
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <h1 className='text-xl font-bold leading-7'>30.000</h1>
          <h1 className='text-sm font-medium text-netral-90'>Jumlah tambak yang disewakan</h1>
        </div>
    </div>
  )
}
