import { getDashboard } from '../services/dashboardService';
import { useApi } from '../hooks/useApi';
import InitiativeList from './InitiativeList';


export default function Dashboard() {
    const { data: dashboardData, isLoading, error, refetch } = useApi(getDashboard, true);

    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Governance Tracker</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                {isLoading && <div className="p-6 text-gray-500">Loading dashboard data...</div>}
                {error && <div className="p-6 text-red-600 bg-red-50 rounded-xl">Error: {error}</div>}
                {dashboardData &&
                    <>
                        {/* KPI Cards */}
                        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
                            <div className='bg-white-300 p-6 rounded-2xl border border-gray-200 shadow-sm'>
                                <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Active Initiatives</p>
                                <p className='text-4xl font-semibold text-gray-900 mt-2'>{dashboardData.data.summary.active}</p>
                            </div>

                            <div className='bg-white-300 p-6 rounded-2xl border border-gray-200 shadow-sm'>
                                <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Pending Documents</p>
                                <p className='text-4xl font-semibold text-gray-900 mt-2'>{dashboardData.data.needs_attention.count}</p>
                            </div>

                            <div className='bg-white-300 p-6 rounded-2xl border border-gray-200 shadow-sm'>
                                <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Blocked Stages</p>
                                <p className='text-4xl font-semibold text-gray-900 mt-2'>{dashboardData.data.needs_attention.count}</p>
                            </div>
                        </div>

                        {/* Initiatives List */}
                        <div className='mt-8 overflow-hidden'>
                            <div className='p-3 flex justify-between'>
                                <h2 className='text-m font-semibold text-gray-900'>Initiatives ({dashboardData.data.summary.total_initiatives})</h2>
                                <a className='text-xs font-semibold text-indigo-500 hover:text-indigo-700' href='/initiatives/add'>+ Add Initiative</a>
                            </div>

                            <InitiativeList initiativeList={dashboardData.data.initiatives} />

                            <a className='pl-3 text-xs font-medium text-indigo-500 hover:text-indigo-700' href='/initiatives'>Show all</a>
                        </div>
                    </>
                }

            </div>
        </>
    )
}