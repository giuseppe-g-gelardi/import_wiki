'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"

import { pages } from '~/navigation/navigation'

export default function SkylinePage() {
  const path = usePathname().split('/')[1]
  const sub_pages = pages.find(p => p.page === path)?.sub_pages

  return (
    <div>
      <div>youre on the skyline page {JSON.stringify(path, null, 2)}</div>
      <div>
        {sub_pages?.map(s => (
          <Link key={s} href={`/${s}`} className='flex gap-4 hover:text-sky-400'>{s}</Link>
        ))}
      </div>
    </div >

  )
}

