import clsx from "clsx"
import Link from "next/link"

export const Navbar = ({ state, setState }: { state: boolean, setState: any }) => {
    return (
        <nav className="flex w-[100vw] relative">
            <div className={clsx(
                'flex flex-col gap-6 items-end sticky top-0 bottom-0 right-0 left-0 bg-custom-bg transition-all ',
                {
                    'w-full h-[100vh] opacity-100 p-4 z-[9]': state,
                    'w-full h-0 opacity-0 p-0 -z-10': !state,
                }
            )}>
                <ul className={clsx(
                    'flex flex-col items-end gap-2 list-none w-full transition-all',
                    {
                        'flex': state,
                        'hidden': !state,
                    }
                )}>
                    <li className="">
                        <Link href=''>
                            <span className="text-white text-sm">RPA XML Notas Fiscais</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link href=''>
                            <span className="text-white text-sm">Pipeline ETL com Airflow</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link href=''>
                            <span className="text-white text-sm">Power BI</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link href=''>
                            <span className="text-white text-sm">CRUD em DJANGO</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link href=''>
                            <span className="text-white text-sm">Desenvolvimento Web</span>
                        </Link>
                    </li>
                </ul>

                <a href="#" className={clsx(
                    "flex text-base text-white border border-white rounded-full px-3 py-1",
                    {
                        'flex': state,
                        'hidden': !state,
                    }
                )}>
                    Fale com a gente!
                </a>
            </div>
        </nav>
    )
}