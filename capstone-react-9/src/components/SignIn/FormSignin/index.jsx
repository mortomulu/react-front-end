import React from 'react';
import { useState } from 'react';
import Logo from '../../../assets/blueharvest-logo.png';

export default function FormSignin() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#59A3DC] to-[#163B83]"></div>
      <section
        className="absolute"
        style={{
          left: '925px',
          right: '0',
          width: '450px',
          height: '582px',
        }}
      >
        <div className="flex flex-col items-center justify-center px-2 mb-8 mx-auto h-screen">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 sm:p-8">
              <div className="flex items-center justify-center mt-12 mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="relative" style={{ width: '128px', height: '118px' }} src={Logo} alt="logo" />
                BlueHarvest
              </div>
              <form className="px-4"action="#">
                <div className='mb-4'>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div className='mb-4'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="Kata Sandi"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="text-sm text-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    style={{ margin: 0 }}
                  >
                    {showPassword ? 'Sembunyikan' : 'Tampilkan'} Kata Sandi
                  </button>

                </div>
                <button type="submit" className="w-full text-white bg-primary-90 hover:bg-primary-90 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ marginBottom: '1rem' }}>Masuk</button>
                <div className="flex justify-center">
                  <a href="#" className="text-sm text-center font-medium text-primary-600 hover:underline dark:text-primary-500" style={{ margin: 0 }}>Lupa Kata Sandi?</a>
                </div>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400" style={{ margin: 0, marginBottom: '3rem' }}>
                  Tidak Punya Akun? <a href="#" className="font-medium text-primary-70 hover:underline dark:text-primary-500">Daftar Sekarang</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
