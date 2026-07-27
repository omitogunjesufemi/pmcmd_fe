import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { getInitiativeById, getInitiativeDocument } from "../services/initiativeService";
import { useEffect, useState } from "react";
import { ArrowUpOnSquareIcon, EllipsisVerticalIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function InitiativeDetail() {
    const { initiative_id } = useParams();

    const { data: initiativeData, isLoading: isLoadingInitiativeData, refetch: executeInitiativeData } = useApi(getInitiativeById, false);

    const { data: initiativeDoc, isLoading: isLoadingInitiativeDoc, refetch: executeInitiativeDoc } = useApi(getInitiativeDocument, false);

    const [openMenuId, setOpenMenuId] = useState(null);


    useEffect(() => {
        if (initiative_id) {
            executeInitiativeData(initiative_id);
            executeInitiativeDoc(initiative_id);
        }
    }, [initiative_id]);

    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Governance Tracker</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                {initiativeData &&
                    <div className="mt-10">
                        <div className=''>
                            <h1 className='text-2xl font-semibold mt-2 text-gray-800'>{initiativeData.data.title}</h1>
                            <p className="">{initiativeData.data.description}</p>
                        </div>

                        <div className="flex flex-row gap-4 mt-4">
                            <div>
                                <span className="flex flex-row gap-2">
                                    <p>Category: </p>
                                    <p>{initiativeData.data.category.name}</p>
                                </span>
                            </div>

                            <div>
                                <span className="flex flex-row gap-2">
                                    <p>Initiative Type: </p>
                                    <p>{initiativeData.data.initiative_type.name}</p>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 mt-4">
                            <div>
                                <span className="flex flex-row gap-2">
                                    <p>Implementation: </p>
                                    <p className="capitalize">{initiativeData.data.implementation}</p>
                                </span>
                            </div>

                            <div>
                                <span className="flex flex-row gap-2">
                                    <p>Status: </p>
                                    <p className="capitalize">{initiativeData.data.status}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                }

                <div className='mt-4 divide-y divide-gray-100'>
                    <div className='hover:bg-gray-50 group cursor-pointer pb-2'>
                        <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                            <span className='text-sm text-gray-400 font-medium'>Title</span>
                            <span className='text-sm text-gray-400 font-medium'>Stage</span>
                            <span className='text-sm text-gray-400 font-medium'>Priority</span>
                            <span className='text-sm text-gray-400 font-medium'>Status</span>
                            <EllipsisVerticalIcon className='size-6 fill-transparent' />
                        </div>
                    </div>
                    {initiativeDoc && initiativeDoc.results.map((doc) => (
                            <div className='hover:bg-gray-50 group cursor-pointer py-6'>
                            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center align-middle'>
                                <h3 className='text-sm font-semibold text-gray-900'>{doc.document_name}</h3>
                                <div >
                                    <span className='text-center rounded-full bg-blue-50 px-2  py-1 text-xs border border-blue-800 text-blue-900 capitalize'>{doc.stage}</span>
                                </div>
                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900'>{doc.is_required ? "Required" : "Optional"} </span>
                                </div>
                                <div>
                                    <span className='text-center rounded-full bg-rose-50 px-2 py-1 text-xs border border-rose-800 text-rose-900 capitalize'>{doc.status}</span>
                                </div>
                                <div className='relative'>
                                    <EllipsisVerticalIcon className='size-6 cursor-pointer hover:transition' onClick={() => setOpenMenuId(openMenuId === doc.id ? null : doc.id)} />

                                    {openMenuId === doc.id && (
                                        <>
                                            <div className='fixed inset-0 z-40' onClick={() => setOpenMenuId(null)}></div>
                                            <div className='absolute right-0 top-full mt-2 w-28 rounded-xl border border-gray-100 shadow-xl z-50 py-1 bg-white flex flex-col items-start gap-2'>
                                                <a href="#" className='px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 transition flex flex-row gap-2 items-center justify-center'><PencilSquareIcon className='size-4' />Edit</a>
                                                <a href={`/initiatives/${initiative_id}/documents/${doc.id}/submit`} className='px-4 py-2 text-sm text-left text-gray-700 hover:bg-blue-50 transition flex flex-row gap-2 items-center justify-center'> <ArrowUpOnSquareIcon className='size-4' />Submit</a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
