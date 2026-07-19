import { ArrowRightCircleIcon, EllipsisVerticalIcon, FolderArrowDownIcon, UserCircleIcon, ViewColumnsIcon } from '@heroicons/react/24/solid';
import { ArrowDownCircleIcon, CheckBadgeIcon, RectangleGroupIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] lg:grid-cols-[16rem_1.5rem_minmax(0,1fr)_1.5rem] font-">
            <div className="relative text-black col-start-1 col-span-1 row-start-1 row-span-full max-lg:hidden">
                <div className="absolute inset-0">
                    <div className="sticky bottom-0 left-0 h-full max-h-full w-2xs p-6 bg-gray-50 flex flex-col justify-between">
                        <nav className="flex flex-col gap-8">
                            <div className="flex items-center gap-4 pb-8 pt-6">
                                <a href="/" className="flex items-center gap-4 text-gray-800">
                                    <RectangleGroupIcon className="size-8" />
                                    <p className='font-bold text-2xl font-sans'>PMCMD</p>
                                </a>
                            </div>

                            <ul className="ml-2 flex flex-col gap-6">
                                <li className='flex items-center gap-4'>
                                    <a className='text-gray-600 inline-flex hover:text-gray-800' href="/">
                                        <ViewColumnsIcon className='size-6' />
                                        <span className='ml-2 font-semibold'>Dashboard</span>
                                    </a>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <a className='text-gray-600 inline-flex hover:text-gray-800' href="/">
                                        <FolderArrowDownIcon className='size-6' />
                                        <span className='ml-2 font-semibold'>Initiatives</span>
                                    </a>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <a className='text-gray-600 inline-flex hover:text-gray-800' href="/">
                                        <CheckBadgeIcon className='size-6' />
                                        <span className='ml-2 font-semibold'>Approvals</span>
                                    </a>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <a className='text-gray-600 inline-flex hover:text-gray-800' href="/">
                                        <Square3Stack3DIcon className='size-6' />
                                        <span className='ml-2 font-semibold'>Documents</span>
                                    </a>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <a className='text-gray-600 inline-flex hover:text-gray-800' href="/">
                                        <ArrowDownCircleIcon className='size-6' />
                                        <span className='ml-2 font-semibold'>Handovers</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* User Profile */}
                        <div className="flex flex-row gap-8 items-center">
                            <div className="flex items-center gap-4">
                                <a href="/" className="flex items-center gap-4 text-gray-800">
                                    <UserCircleIcon className="size-8" />
                                    <p className='font-bold text-m font-sans'>User Profile</p>
                                </a>
                            </div>
                            <ArrowRightCircleIcon className='size-6' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block lg:col-start-2 col-start-1 col-span-1"></div>

            <div className="relative text-black row-start-1 grid grid-cols-subgrid lg:col-start-3">
                <div className="mx-auto grid grid-cols-1 gap-4 w-full max-w-2xl xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_16rem]">

                    <Outlet />

                    <div className="max-xl:hidden">
                        <div className='sticky top-0 max-h-full overflow-x-hidden overflow-y-auto p-6 pt-20 bg-white border-l border-gray-200'>
                            <h3 className='text-sm font-bold text-gray-900 uppercase tracking-wide mb-6'>Recent Activity</h3>
                            <div className='space-y-6'>
                                <div className='border-l-2 border-indigo-500 pl-4'>
                                    <p className='text-sm font-semibold text-gray-900'>Stage Advanced</p>
                                    <p className='text-sm text-gray-600 mt-1'>Factsheet Auto.</p>
                                    <p className='text-xs text-gray-400 mt-2'>2 hours ago</p>
                                </div>

                                <div className='border-l-2 border-indigo-500 pl-4'>
                                    <p className='text-sm font-semibold text-gray-900'>Stage Advanced</p>
                                    <p className='text-sm text-gray-600 mt-1'>Factsheet Auto.</p>
                                    <p className='text-xs text-gray-400 mt-2'>2 hours ago</p>
                                </div>

                                <div className='border-l-2 border-indigo-500 pl-4'>
                                    <p className='text-sm font-semibold text-gray-900'>Stage Advanced</p>
                                    <p className='text-sm text-gray-600 mt-1'>Factsheet Auto.</p>
                                    <p className='text-xs text-gray-400 mt-2'>2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <div className="bg-amber-950 col-span-full col-start-2 row-start-2 h-px"></div>
            <div className="row-start-3 h-50">
                <div></div>
            </div>
            <div className="bg-amber-950 col-span-full col-start-2 row-start-4 h-px"></div>
            <div className="row-start-5 h-50">
                <div></div>
            </div> */}

            <div className="hidden lg:block lg:col-start-4"></div>
        </div>
    )
}