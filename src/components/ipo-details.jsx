import React from 'react';
import { formatAmount, formatDate } from '../helpers';

export default function IPODetails({ ipoData }) {
    console.log("ipoData", ipoData)
    return (
        <div className="p-4 space-y-4 rounded-xl border">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-gray-500">Issue Size</h3>
                    <p className="font-semibold text-lg">{`3600 - 3700Cr.`}</p>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-gray-500">Price Range</h3>
                    <p className="font-semibold text-lg">₹{ipoData.price_start} - ₹{ipoData.price_end}</p>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-gray-500"><span className='block sm:hidden'>Min. Amount</span><span className='sm:block hidden'>Minimum Amount</span></h3>
                    <p className="font-semibold text-lg">₹{ipoData.minimum_amount}</p>
                </div>
                <div className="bg-white p-4 rounded-md block sm:hidden">
                    <h3 className="text-gray-500">Min. Quantity</h3>
                    <p className="font-semibold text-lg">150 shares</p>
                </div>
                <div className="bg-white p-4 rounded-md hidden sm:block">
                    <h3 className="text-gray-500">Lot Size</h3>
                    <p className="font-semibold text-lg">{ipoData.lot_size} shares</p>
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h3 className="text-gray-500">Issue dates</h3>
                    <p className="font-semibold text-lg">{formatDate(ipoData.issue_start_date, true)} - {formatDate(ipoData.issue_end_date)}</p>
                </div>
                <div className="bg-white p-4 rounded-md hidden sm:block">
                    <h3 className="text-gray-500">Listed On</h3>
                    <p className="font-semibold text-lg">15 Dec 2022</p>
                </div>
                <div className="bg-white p-4 rounded-md hidden sm:block">
                    <h3 className="text-gray-500">Listed Price</h3>
                    <p className="font-semibold text-lg">₹{100}</p>
                </div>
                <div className="bg-white p-4 rounded-md hidden sm:block">
                    <h3 className="text-gray-500">Listing Gains</h3>
                    <p className="font-semibold text-lg">₹{100}(<span className='text-orange-500'>10.0%</span>)</p>
                </div>
            </div>
        </div>
    );
}