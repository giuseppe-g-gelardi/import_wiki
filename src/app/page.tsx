import Link from "next/link";
import { pages } from '../navigation/navigation'

export default function Home() {
    return (
        <main className="flex flex-col row-start-2 items-center sm:items-start">
            {pages.map(p => (
                <Link key={p.page} href={`/${p.page}`} className='hover:text-sky-400'>{p.page} page</Link>
            ))}
        </main>
    );
}

