import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col row-start-2 items-center sm:items-start">
            {pages.map(p => (
                <Link key={p.page} href={`/${p.page}`} className='hover:text-sky-400'>{p.page} page</Link>
            ))}
        </main>
    );
}

type Pages = {
    page: string,
    sub_pages: Array<string>
}

const pages = [
    {
        page: 'skyline',
        sub_pages: ['r32', 'r33', 'r34']
    },
    {
        page: 'chaser',
        sub_pages: ['jsx90', 'jsx100', 'jsx110']
    }
] as Array<Pages>



