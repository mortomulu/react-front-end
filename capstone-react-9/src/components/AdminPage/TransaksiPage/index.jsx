import React from 'react'
import LayoutDashboard from '../../LayoutDashboard/LayoutDashboard'
import GrafikPenjualan from './CardGrafikPenjualan'
import TabelTransaksi from './TabelTransaksi'

export default function TeansaksiPage() {
  return (
    <div className='flex flex-col'style={{ backgroundColor: '#E6F6FF' }}>
        <LayoutDashboard>
            <GrafikPenjualan/>
            <div className='flex flex-col' style={{marginRight: '100px'}}>
            <TabelTransaksi/>           
            </div>
        </LayoutDashboard>
    </div>
  )
}
