'use client';
import Link from 'next/link';
import React from 'react';

interface SideBarCompProps {
    arrayOfLinksWithTitle: { title: string; link: string }[];
    isVisible: boolean;
}

function SideBarComp({ arrayOfLinksWithTitle, isVisible }: SideBarCompProps) {
    return (

        <div className={`fixed mt-11 top-0 left-0 h-full bg-gray-900 text-white transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '25%' }}>
            <div className="flex flex-col min-w-[25%] h-[95vh] mt-2 mx-auto gap-4 border-slate-600 border border-solid rounded-md p-4">
                {arrayOfLinksWithTitle.map((link, index) => (
                    <div
                        key={index}
                        className="text-blue-600 cursor-pointer hover:underline pl-2"
                    >
                        <Link href={link.link}>{link.title}</Link>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default SideBarComp;
