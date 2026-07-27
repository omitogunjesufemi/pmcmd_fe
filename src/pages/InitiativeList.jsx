import InitiativeList from '../components/InitiativeList';
import { useApi } from '../hooks/useApi';
import { getInitiatives } from '../services/initiativeService';

export default function InitiativesList() {
    const { data: initiatives, isLoading, error } = useApi(getInitiatives, true);
    console.log(initiatives);

    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Governance Tracker</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                {isLoading && <div className="p-6 text-gray-500">Loading dashboard data...</div>}
                {error && <div className="p-6 text-red-600 bg-red-50 rounded-xl">Error: {error}</div>}

                {initiatives && <div className='mt-8 overflow-hidden'>
                    <div className='p-3 flex justify-between'>
                        <h2 className='text-m font-semibold text-gray-900'>Initiatives ({initiatives.count})</h2>
                        <a className='text-xs font-semibold text-indigo-500 hover:text-indigo-700' href='/initiatives/add'>+ Add Initiative</a>
                    </div>

                    <InitiativeList initiativeList={initiatives.results} />
                </div>}
            </div>
        </>
    );
}