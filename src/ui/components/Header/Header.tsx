'use client';

import { useState } from "react"
import automamax from '../../../assets/logo/automamax.png';
import { Navbar } from './Navbar';
import clsx from "clsx";

export const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <header 
                className='flex flex-col items-center justify-between bg-custom-bg-transparent border-b border-custom-bg backdrop-blur-[6px] fixed top-0 left-0 right-0 z-[9]'>
                <div className={clsx(
                    "flex flex-row items-center justify-between w-full p-2 transition-all",
                    // {
                    //     'shadow-none' : open,
                    //     'shadow-custom-shadow-light' : !open,
                    // }
                    )}>
                    <a href="/" className='no-underline pl-2'>
                        <img
                            width='140'
                            height='auto'
                            src={automamax.src}
                        />
                    </a>
                    <button 
                        className={clsx(
                            'p-2 rounded-full transition-all',
                            {
                                'bg-custom-bg-second shadow-custom-shadow-light' : open,
                                'bg-transparent shadow-none' : !open,
                            }
                        )}
                        onClick={() => setOpen(!open)}
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Menu / Menu_Alt_02">
                                <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                    </button>
                </div>
                <Navbar state={open} setState={setOpen}/>
            </header>
        </>
    )
}
