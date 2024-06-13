import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'flowbite';

export default function TabelTransaksi() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImIwMWI0ZjkwLWEyNGYtNDc4YS1hYTQ1LTM4MTM1YWMyNDIwYiIsIkVtYWlsIjoiaXJ2YW4tc3VyeWEtYWRtaW4tMkBibHVlaGFydmVzdC5jb20iLCJGdWxsTmFtZSI6IklydmFuIiwiUm9sZSI6ImFkbWluIiwiZXhwIjoxNzE4MjU0NjI5fQ.XcYNXuiKFB9QQXMws1f0qAk_-3eAg5GxXX2Hi6Vx-ks'; // Ganti dengan token yang valid

        const response = await axios.get('https://blueharvest.irvansn.com/v1/transactions', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        setTransactions(response.data.data.transactions);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fungsi untuk halaman sebelumnya
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fungsi untuk halaman berikutnya
  const nextPage = () => {
    if (currentPage < Math.ceil(transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Hitung data yang ditampilkan per halaman
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Buat nomor halaman
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Mengatur logika untuk menampilkan 4 tombol pagination
  const renderPageNumbers = () => {
    const maxPageNumbers = 4;
    const totalPages = pageNumbers.length;
    let startPage, endPage;

    if (totalPages <= maxPageNumbers) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= maxPageNumbers - 1) {
        startPage = 1;
        endPage = maxPageNumbers;
      } else if (currentPage + maxPageNumbers - 1 >= totalPages) {
        startPage = totalPages - (maxPageNumbers - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + maxPageNumbers - 2;
      }
    }

    const pageNumbersToShow = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbersToShow.push(i);
    }

    return pageNumbersToShow;
  };

  return (
    <div className="relative overflow-x-auto mt-3 bg-white mb-3 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Nama</th>
            <th scope="col" className="px-6 py-3">Tanggal</th>
            <th scope="col" className="px-6 py-3">Produk</th>
            <th scope="col" className="px-6 py-3">Harga</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction, index) => (
            <tr key={transaction.id} className={`border-b text-darker-70 dark:border-gray-700 ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {indexOfFirstTransaction + index + 1}
              </th>
              <td className="px-6 py-4">{transaction.customer.full_name}</td>
              <td className="px-6 py-4">{new Date(transaction.transaction_details[0]?.date || Date.now()).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                {transaction.transaction_details.length > 0 ? transaction.transaction_details[0].product.name : 'N/A'}
              </td>
              <td className="px-6 py-4">
                {transaction.transaction_details.length > 0 ? transaction.transaction_details[0].total_price : 'N/A'}
              </td>
              <td className="px-6 py-4">{transaction.payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 mr-3 mb-3">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <button 
                onClick={prevPage} 
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4"/>
                </svg>
              </button>
            </li>
            {renderPageNumbers().map(number => (
              <li key={number}>
                <button 
                  onClick={() => paginate(number)} 
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === number ? 'text-blue-600 bg-blue-50 border-blue-300' : 'text-gray-500 bg-white border-gray-300 border'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button 
                onClick={nextPage} 
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4"/>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
