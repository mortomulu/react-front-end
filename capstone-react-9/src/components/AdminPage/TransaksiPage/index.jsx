import React from 'react'
import LayoutDashboard from '../../LayoutDashboard/LayoutDashboard'
import GrafikPenjualan from './CardGrafikPenjualan'
import TabelTransaksi from './TabelTransaksi'

export default function TeansaksiPage() {
  return (
    <div>
        <LayoutDashboard>
            <GrafikPenjualan/>
            <TabelTransaksi/>
        </LayoutDashboard>
    </div>
  )
}
