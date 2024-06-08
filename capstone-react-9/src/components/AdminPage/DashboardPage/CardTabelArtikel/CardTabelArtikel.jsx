import React from 'react'
import fotoProfil1 from '../../../../assets/ProfilPengguna1.png'
import fotoProfil2 from '../../../../assets/ProfilPengguna2.png'
import fotoProfil3 from '../../../../assets/ProfilPengguna3.png'


export default function CardTabelArtikel() {
  return (
    <div style={{ height: '310px', width: '547px' }} className='flex flex-col gap-2 bg-white p-4 rounded-2xl'>
        <div className='flex justify-between items-center self-stretch'>
          <h1 className='text-xl font-semibold'>Top Artikel</h1>
          <a href="" className='text-primary-90 rounded-lg'>Detail</a>
        </div>
        <div>
          <table>
            <thead style={{ height: '31px', width:'514px' }} className='flex gap-5 px-2 border-b border-primary-70 items-center'>
              <th style={{ width: '44px' }} className='flex items-start text-sm font-medium'>Foto</th>
              <th style={{ width: '160px' }} className='flex items-start text-sm font-medium'>Judul</th>
              <th style={{ width: '110px' }} className='flex items-start text-sm font-medium'>Tanggal</th>
              <th style={{ width: '' }} className='flex items-start text-sm font-medium'>Penulis</th>
            </thead>
            <tbody>
              <tr style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{width: '50px' }}>
                  <img src={fotoProfil1} alt="" style={{ height: '40px', width: '40px'}}/>
                </td>
                <td style={{width: '160px' }}>
                  <p className='text-sm font-medium'>Tata cara budidaya perikanan</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-medium'>25 Mei 2024</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-medium'>Saipul Adli Fikri</p>
                </td>
              </tr>
              <tr style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{width: '50px' }}>
                  <img src={fotoProfil2} alt="" style={{ height: '40px', width: '40px'}}/>
                </td>
                <td style={{width: '160px' }}>
                  <p className='text-sm font-medium'>Tata cara budidaya perikanan</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-medium'>25 Mei 2024</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-medium'>Saipul Adli Fikri</p>
                </td>
              </tr>
              <tr style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{width: '50px' }}>
                  <img src={fotoProfil3} alt="" style={{ height: '40px', width: '40px'}}/>
                </td>
                <td style={{width: '160px' }}>
                  <p className='text-sm font-medium'>Tata cara budidaya perikanan</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-medium'>25 Mei 2024</p>
                </td>
                <td style={{ width: '110px' }}>
                  <p className='text-sm font-medium'>Saipul Adli Fikri</p>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
    </div>
  )
}
