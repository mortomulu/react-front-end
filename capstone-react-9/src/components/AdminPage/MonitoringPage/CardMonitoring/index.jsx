import React from 'react'
import LogoAir from '../../../../assets/logo-air.svg';
import LogoOksigen from '../../../../assets/logo-oksigen.svg';
import LogoSuhu from '../../../../assets/logo-suhu.svg';

export default function CardMonitoring() {
  return (
    <div className="flex gap-4 ml-3 mt-4 mb-4">
      <div style={{ height: '116px', width:'342px' }} className='flex flex-col bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-[20px] font-bold'>Suhu Air Dalam Tambak</h1>
          </div>
          <div className='relative'>
            <img style={{ marginBottom: '-800px'}} src={LogoSuhu} alt="logo" />
          </div>  
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <p className='text-[20px] font-medium leading-7' style={{marginTop:'-5px'}}>28-30 °C</p>
          <p className='text-sm font-medium text-succes-90'>Sangat Bagus</p>
        </div>
      </div>

      <div style={{ height: '116px', width:'342px' }} className='flex flex-col bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-[20px] font-bold'>Ph Air Dalam Tambak</h1>
          </div>
          <div className='relative'>
            <img style={{ marginBottom: '-800px'}} src={LogoAir} alt="logo" />
          </div>  
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <p className='text-[20px] font-medium leading-7' style={{marginTop:'-5px'}}>6.5</p>
          <p className='text-sm font-medium text-warning-50'>Kurang bagus</p>
        </div>
      </div>

      <div style={{ height: '116px', width:'342px' }} className='flex flex-col bg-white shadow-md py-3 px-4 rounded-2xl border-primary-70 items-start'>
        <div className='flex justify-between items-center self-stretch h-11'>
          <div>
            <h1 className='text-[20px] font-bold'>Suhu Air Dalam Tambak</h1>
          </div>
          <div className='relative'>
            <img style={{ marginBottom: '-800px'}} src={LogoOksigen} alt="logo" />
          </div>  
        </div>
        <div style={{ height: '59px', width: '318px' }} className='flex flex-col items-start self-stretch gap-1'>
          <p className='text-[20px] font-medium leading-7' style={{marginTop:'-5px'}}>10 %</p>
          <p className='text-sm font-medium text-error-70'>Sangat Buruk</p>
        </div>
      </div>
    </div>
  )
}
