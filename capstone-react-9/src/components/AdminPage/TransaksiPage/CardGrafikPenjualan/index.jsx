import React, { useRef, useLayoutEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

export default function GrafikPenjualan() {
  const chartRef = useRef(null);
  const [maxSales, setMaxSales] = useState(0);

  useLayoutEffect(() => {
    const dataSales = [0, 250000000, 500000000, 1000000000];
    const maxSalesValue = Math.max(...dataSales);
    setMaxSales(maxSalesValue);

    const options = {
      chart: {
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false, // Disable initial animations to avoid rendering issues
        },
        width: '100%', // Menetapkan lebar grafik menjadi 100%
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: '#1C64F2',
          gradientToColors: ['#1C64F2'],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: 'Penjualan',
          data: dataSales,
          color: '#1A56DB',
        },
      ],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        labels: {
          show: false, // Menyembunyikan label sumbu x
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        tickAmount: 5,
      },
      yaxis: {
        show: false, // Menghilangkan sumbu y
        max: maxSalesValue,
        min: 0, // Menentukan nilai minimum untuk sumbu y
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return (
    <div style={{ height: '414px', width: '1080px', overflow: 'hidden' }} className='py-6 px-14 font-Poppins rounded-2xl bg-white border-b-2 border-primary-70'>
      <h1 className='text-[26px] font-[600px]'>Grafik Penjualan Bulanan</h1>
      <p className='text-[18px] font-[600px]'>30,000 Pelanggan</p>
      <div className="flex" style={{ height: '270px' }}>
        <div id="area-chart" ref={chartRef} style={{ height: '100%', width: '50%' }} />
      </div>
      <div className="flex justify-between mt-4">
        {['Feb', 'Mar', 'Apr', 'Mei', 'Jun'].map((month, index) => (
          <p key={index}>{month}</p>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(maxSales)}</p>
        <p>500jt</p>
        <p>250jt</p>
        <p>0</p>
      </div>
    </div>
  );
}
