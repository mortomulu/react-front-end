import React from 'react'
import CardBenefit from './CardFeature'

export default function featureSection() {
  return (
    <div className='h-screen bg-gradient-to-b from-gradient-2 via-gradient-2 to-gradient-3 text-white' style={{height: `917px`}}>
        <div className="grid gap-8 justify-items-center pt-16">
            <div className=''>
                <h1 className='text-5xl font-bold text-white '>Temukan Rangkaian Fitur Terbaik Kami</h1>
            </div>
            <div>
                <p className='text-2xl text-white'>“Jelajahi Pilihan Terbaik Fitur Aplikasi Kami: Temukan Fitur Favoritmu!”</p>
            </div>
        </div>
        <CardBenefit/>
    </div>
  )
}
