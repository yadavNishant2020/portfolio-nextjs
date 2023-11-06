import React from 'react'
import { links, socialMediaLinks } from "@/lib/data";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="w-full h-12 bg-black text-white flex justify-between px-5">
                <div className='flex items-center text-lg'>Nishant.</div>
                <div>
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-sans font-light text-lg tracking-wider sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {
                            links.map(link => (
                                <li className="h-3/4 flex items-center justify-center relative" key={link.hash}>
                                    <Link className="flex w-full items-center justify-center px-3 py-3 transition text-gray-50 hover:text-gray-300" href={link.hash}>{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            <nav className="w-full h-12 bg-white text-black flex justify-end items-center px-5">
                <div>
                    <ul className="flex w-[22rem] flex-wrap items-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
                        {
                            socialMediaLinks.map((link) => (
                                <a className="w-10" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                                    {React.cloneElement(link.icon, { className: 'text-xl' })} {/* Adjust the size using text-{size} class */}
                                </a>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
