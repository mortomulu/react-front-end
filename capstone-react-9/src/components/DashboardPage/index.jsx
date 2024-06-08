import React from 'react'
import Sidebar from './Sidebar/sidebar'
import Header from './Header/Header'
import CardPendapatan from './CardPendapatan/CardPendapatan'
import CardTotalProduk from './CardTotalProduk/CardTotalProduk'
import CardTotalTambak from './CardTotalTambak/CardTotalTambak'
import CardGrafik from './CardGrafik/CardGrafik'
import CardTabelArtikel from './CardTabelArtikel/CardTabelArtikel'
import CardTabelProduk from './CardTabelProduk/CardTabelProduk'
import LayoutDashboard from '../LayoutDashboard/LayoutDashboard'

export default function dashboardPage() {
  return (
    <div className='flex font-Poppins' style={{ backgroundColor: '#E6F6FF' }}>
        <LayoutDashboard>
                <div className='flex gap-4'>
                    <CardPendapatan/>
                    <CardTotalProduk/>
                    <CardTotalTambak/>
                </div>
                <CardGrafik/>
                <div className='flex gap-2'>
                    <CardTabelArtikel/>
                    <CardTabelProduk/>
                </div>
        </LayoutDashboard>
    </div>
  )
}
