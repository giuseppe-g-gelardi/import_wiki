'use client';

import Link from "next/link";

export default function Navbar() {
  return <div className='flex flex-col w-full h-16 shadow-2xl dark:bg-white/50 bg-black/50'>
    <div className='flex h-full items-center'>
      <div className='flex h-full w-1/2 items-center'>
        {/* left */}
        <Link href='/'>Home</Link>
      </div>
      <div className='flex h-full w-1/2 items-center'>
        {/* right */}
        <p className='flex ml-auto'>right div</p>
      </div>
    </div>
  </div>
}

