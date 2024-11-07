import React from 'react';
import Company from './compay';
import { Button } from './button';
import DownloadIcon from '../assets/logos/download.png'
import Arrow from '../assets/logos/arrow.png'
import { useNavigate } from "react-router-dom";

export default function IPOHeader({ companyDetails }) {
    const navigate = useNavigate();

    const handleLeftButtonClick = () => {
        navigate('/ipo')
    };
    return (
        <div className="text-gray-500 flex justify-between items-center">
            <div className='flex gap-5'>
                <Button text={
                    <img src={Arrow} alt="Arrow"
                    />
                }
                    style={"bg-white rounded-xl px-1 hidden sm:block"}
                    onClick={handleLeftButtonClick}
                />
                <Company companyDetails={companyDetails} />
            </div>
            <div className='flex gap-5'>
                <Button text={
                    <img src={DownloadIcon} alt="download" />
                } style={"bg-white rounded-xl px-1 hidden sm:block"} />
                < Button text={"Apply Now"} style={"bg-[#000000] text-white py-4 px-8 rounded-xl hidden sm:block"}
                />
            </div>
        </div>
    )
};