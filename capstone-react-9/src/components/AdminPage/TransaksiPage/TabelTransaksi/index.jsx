import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TabelTransaksi() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(''); 
        setTransactions(response.data.data.transactions);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-[#1B1B1B]">
          <thead className="text-xs text-[#1B1B1B] uppercase border-b border-[#8C8C8C]">
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
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className="border-b border-[#8C8C8C]">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {index + 1}
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
      </div>
    </div>
  );
}
