import React from 'react';
import signinBg from '../../../assets/signin-bg.jpeg';
import Logo from '../../../assets/blueharvest-logo.png';

export default function BannerSignin() {
  return ( 
    <div className="relative h-screen w-full flex-shrink-0"
      style={{
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.20) 99.99%, rgba(0, 0, 0, 0.00) 100%),
          url(${signinBg}) lightgray 50% / cover no-repeat 
        `
      }}
    >
      <div
        className="relative"
        style={{
          bottom: `78px`,
          left: `160px`,
          position: 'absolute',
          zIndex: 1000,
          padding: '20px', 
          color: '#F2F2F2', 
          fontFamily: 'Poppins', 
          fontSize: '22px', 
          fontStyle: 'normal', 
          fontWeight: 600, 
          lineHeight: '28px', 
        }}
      >
        <h1>
          Pengalaman Belanja<br />
          Produk Tambak yang Berbeda
        </h1>
      </div>
      <div
        className="relative"
        style={{
          bottom: `16px`,
          left: `160px`,
          position: 'absolute',
          zIndex: 1000,
          padding: '20px', 
          color: '#F2F2F2', 
          fontFamily: 'Poppins', 
          fontSize: '14px', 
          fontStyle: 'normal', 
          fontWeight: 600, 
          lineHeight: '16px', 
        }}
      >
        <p>
        Masuk ke akun Anda dan nikmati beragam produk tambak <br />
        dengan kualitas terbaik. Selamat datang dan selamat<br />
        berbelanja!
        </p>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-sign to-signin"></div>
      <section className="absolute"
              style={{
                left: 925 ,
                right: 0 ,
                width: `450px`,
                height: `582px`,
                position: 'absolute',
      
                
              }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-center mt-12 mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="relative" style={{width: `128px`, height: `118px`}} src={Logo} alt="logo" />
            BlueHarvest
          </div>

              <form className="space-y-4 md:space-y-6 mr-2 ml-2" action="#">
                <div>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                </div>
                <div>
                  <input type="password" name="password" id="password" placeholder="Kata Sandi" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        
      </section>
      
    </div>
    
  );
}
