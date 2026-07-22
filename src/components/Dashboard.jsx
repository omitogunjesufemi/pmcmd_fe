import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { getDashboard } from '../services/dashboardService';
import { useApi } from '../hooks/useApi';


export default function Dashboard() {
    const { data: dashboardData, isLoading, error, refetch } = useApi(getDashboard, true);

    if (isLoading) {
        return <div className="p-6 text-gray-500">Loading dashboard data...</div>;
    }
    if (error) {
        return <div className="p-6 text-red-600 bg-red-50 rounded-xl">Error: {error}</div>;
    }

    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Governance Tracker</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                {/* KPI Cards */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
                    <div className='bg-white-300 p-6 rounded-2xl border border-gray-200 shadow-sm'>
                        <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Active Initiatives</p>
                        <p className='text-4xl font-semibold text-gray-900 mt-2'>{dashboardData.data.summary.active}</p>
                    </div>

                    <div className='bg-white-300 p-6 rounded-2xl border border-gray-200 shadow-sm'>
                        <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Pending Documents</p>
                        <p className='text-4xl font-semibold text-gray-900 mt-2'>5</p>
                    </div>

                    <div className='bg-white-300 p-6 rounded-2xl border border-gray-200 shadow-sm'>
                        <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Blocked Stages</p>
                        <p className='text-4xl font-semibold text-gray-900 mt-2'>2</p>
                    </div>
                </div>

                {/* Initiatives List */}
                <div className='mt-8 overflow-hidden'>
                    <div className='p-3 flex justify-between'>
                        <h2 className='text-m font-semibold text-gray-900'>Initiatives</h2>
                        <a className='text-xs font-medium text-indigo-500 hover:text-indigo-700' href='/'>View all</a>
                    </div>
                    <div className='p-3 divide-y divide-gray-100'>
                        <div className='hover:bg-gray-50 group cursor-pointer pb-2'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <span className='text-sm text-gray-400 font-medium'>Title</span>
                                <span className='text-sm text-gray-400 font-medium'>Status</span>
                                <span className='text-sm text-gray-400 font-medium'>Blockers</span>
                                <span className='text-sm text-gray-400 font-medium'>Progress</span>
                                <EllipsisVerticalIcon className='size-6 fill-transparent' />
                            </div>
                        </div>

                        <div className='hover:bg-gray-50 group cursor-pointer py-6'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <h3 className='text-sm font-semibold text-gray-900'>RM Mapping</h3>
                                <div >
                                    <span className='text-center rounded-full bg-blue-50 px-2  py-1 text-xs border border-blue-800 text-blue-900'>Development</span>
                                </div>

                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900'>3 pending</span>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='w-full max-w-md rounded-full h-2 bg-gray-100'>
                                        <div className='bg-green-600 h-2 rounded-full' style={{ width: '40%' }}></div>
                                    </div>
                                    <span className='text-xs font-semibold text-gray-500 font-mono'>40%</span>
                                </div>
                                <EllipsisVerticalIcon className='size-6' />
                            </div>
                        </div>

                        <div className='hover:bg-gray-50 group cursor-pointer py-6'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <h3 className='text-sm font-semibold text-gray-900'>Mutual Fund Factsheet</h3>
                                <div >
                                    <span className='text-center rounded-full bg-blue-50 px-2  py-1 text-xs border border-blue-800 text-blue-900'>Development</span>
                                </div>
                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900'>3 pending</span>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='w-full max-w-md rounded-full h-2 bg-gray-100'>
                                        <div className='bg-green-600 h-2 rounded-full' style={{ width: '86%' }}></div>
                                    </div>
                                    <span className='text-xs font-semibold text-gray-500 font-mono'>86%</span>
                                </div>
                                <EllipsisVerticalIcon className='size-6' />
                            </div>
                        </div>

                        <div className='hover:bg-gray-50 group cursor-pointer py-6'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <h3 className='text-sm font-semibold text-gray-900'>Coupon Payment Module</h3>
                                <div >
                                    <span className='text-center rounded-full bg-blue-50 px-2  py-1 text-xs border border-blue-800 text-blue-900'>Development</span>
                                </div>
                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900'>3 pending</span>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='w-full max-w-md rounded-full h-2 bg-gray-100'>
                                        <div className='bg-green-600 h-2 rounded-full' style={{ width: '26%' }}></div>
                                    </div>
                                    <span className='text-xs font-semibold text-gray-500 font-mono'>26%</span>
                                </div>
                                <EllipsisVerticalIcon className='size-6' />
                            </div>
                        </div>

                        <div className='hover:bg-gray-50 group cursor-pointer py-6'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <h3 className='text-sm font-semibold text-gray-900'>AuM Report Automation</h3>
                                <div >
                                    <span className='text-center rounded-full bg-blue-50 px-2  py-1 text-xs border border-blue-800 text-blue-900'>Development</span>
                                </div>
                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900'>3 pending</span>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='w-full max-w-md rounded-full h-2 bg-gray-100'>
                                        <div className='bg-green-600 h-2 rounded-full' style={{ width: '70%' }}></div>
                                    </div>
                                    <span className='text-xs font-semibold text-gray-500 font-mono'>70%</span>
                                </div>
                                <EllipsisVerticalIcon className='size-6' />
                            </div>
                        </div>
                    </div>

                    <a className='pl-3 text-xs font-medium text-indigo-500 hover:text-indigo-700' href='/'>Show completed</a>
                </div>
            </div>
        </>
    )
}