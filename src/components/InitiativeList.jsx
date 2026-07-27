import { EllipsisVerticalIcon, EyeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


export default function InitiativeList({ initiativeList }) {
    const [openMenuId, setOpenMenuId] = useState(null);
    return (
        <>
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

                {initiativeList && initiativeList.map((initiative) => (
                    <a href={`/initiatives/${initiative.id}`}>
                        <div className='hover:bg-gray-50 group cursor-pointer py-6'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <h3 className='text-sm font-semibold text-gray-900'>{initiative.title}</h3>
                                <div >
                                    <span className='text-center rounded-full bg-blue-50 px-2  py-1 text-xs border border-blue-800 text-blue-900 capitalize'>{initiative.current_stage}</span>
                                </div>

                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900'>{initiative.blocking_documents_count} pending</span>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='w-full max-w-md rounded-full h-2 bg-gray-100'>
                                        <div className='bg-green-600 h-2 rounded-full' style={{ width: '40%' }}></div>
                                    </div>
                                    <span className='text-xs font-semibold text-gray-500 font-mono'>40%</span>
                                </div>
                                <div className='relative'>
                                    <EllipsisVerticalIcon className='size-6 cursor-pointer hover:transition' onClick={() => setOpenMenuId(openMenuId === initiative.id ? null : initiative.id)} />

                                    {openMenuId === initiative.id && (
                                        <>
                                            <div className='fixed inset-0 z-40' onClick={() => setOpenMenuId(null)}></div>
                                            <div className='absolute right-0 top-full mt-2 w-24 rounded-xl border border-gray-100 shadow-xl z-50 py-1 bg-white flex flex-col gap-2'>
                                                <a href={`/initiatives/${initiative.id}/edit`} className='px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition flex flex-row gap-2 items-center justify-center'><PencilSquareIcon className='size-4' />Edit</a>
                                                <a href={`/initiatives/${initiative.id}`} className='px-4 py-2 text-sm text-left text-gray-700 hover:bg-blue-50 transition flex flex-row gap-2 items-center justify-center'> <EyeIcon className='size-4' />View</a>
                                            </div>
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>
                    </a>

                ))}

            </div>
        </>
    );
}
