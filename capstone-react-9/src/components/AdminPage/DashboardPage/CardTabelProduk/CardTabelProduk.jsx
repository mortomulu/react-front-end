import fotoProduk1 from '../../../../assets/FotoProduk1.png'
import fotoProduk2 from '../../../../assets/FotoProduk2.png'
import fotoProduk3 from '../../../../assets/FotoProduk3.png'

export default function CardTabelProduk() {
  return (
    <div style={{ height: '310px', width: '520px' }} className='flex flex-col gap-2 bg-white p-4 rounded-2xl'>
        <div className='flex justify-between items-center self-stretch'>
          <h1 className='text-xl font-semibold'>Top Produk</h1>
          <a href="" className='text-primary-90 rounded-lg'>Detail</a>
        </div>
        <div>
          <table>
            <thead style={{ height: '31px', width:'489px' }} className='flex gap-5 px-2 items-center border-b border-primary-70'>
              <th style={{ width: '44px' }} className='flex items-start text-sm font-medium'>Foto</th>
              <th style={{ width: '150px' }} className='flex items-start text-sm font-medium'>Nama Produk</th>
              <th style={{ width: '100px' }} className='flex items-start text-sm font-medium'>Harga</th>
              <th style={{ width: '100px' }} className='flex items-start text-sm font-medium'>Terjual</th>
            </thead>
            <tbody>
              <tr style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{width: '50px' }}>
                  <img src={fotoProduk1} alt="" style={{ height: '40px', width: '40px'}}/>
                </td>
                <td style={{width: '150px' }}>
                  <p className='text-sm font-medium'>Ikan Bandeng</p>
                </td>
                <td style={{ width: '100px' }}>
                  <p className='text-sm font-medium'>Rp 20.000</p>
                </td>
                <td style={{ width: '100px' }}>
                  <p className='text-sm font-medium'>8000</p>
                </td>
              </tr>
              <tr style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{width: '50px' }}>
                  <img src={fotoProduk2} alt="" style={{ height: '40px', width: '40px'}}/>
                </td>
                <td style={{width: '150px' }}>
                  <p className='text-sm font-medium'>Kepiting</p>
                </td>
                <td style={{ width: '100px' }}>
                  <p className='text-sm font-medium'>Rp 120.000</p>
                </td>
                <td style={{ width: '100px' }}>
                  <p className='text-sm font-medium'>5200</p>
                </td>
              </tr>
              <tr style={{ height: '60px' }} className='flex gap-5 px-1 py-2 items-center border-b border-primary-70'>
                <td style={{width: '50px' }}>
                  <img src={fotoProduk3} alt="" style={{ height: '40px', width: '40px'}}/>
                </td>
                <td style={{width: '150px' }}>
                  <p className='text-sm font-medium'>Udang</p>
                </td>
                <td style={{ width: '100px' }}>
                  <p className='text-sm font-medium'>Rp 50.000</p>
                </td>
                <td style={{ width: '100px' }}>
                  <p className='text-sm font-medium'>4900</p>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
    </div>
    )
}
