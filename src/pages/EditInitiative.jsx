import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { editInitiative, categoryList, initiativeTypeList, getInitiativeById } from "../services/initiativeService";

export default function EditInitiative() {
    const { initiative_id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [initiativeTypeId, setInitiativeTypeId] = useState('');
    const [status, setStatus] = useState('');
    const [implementation, setImplementation] = useState('');

    const { isLoading, error, refetch: executeEditInitiative } = useApi(editInitiative, false);
    const { data: categoryData, isLoading: isLoadingCategory } = useApi(categoryList);
    const { data: initiativeTypeData, isLoading: isLoadingInitiativeType } = useApi(initiativeTypeList);
    const { data: initiativeData, isLoading: isLoadingInitiativeData, refetch: executeInitiativeData } = useApi(getInitiativeById, false);
    const navigate = useNavigate();

    useEffect(() => {
        if (initiative_id) {
            executeInitiativeData(initiative_id);
        }
    }, [initiative_id]);

    useEffect(() => {
        if (initiativeData && initiativeData.data) {
            setTitle(initiativeData.data.title);
            setDescription(initiativeData.data.description);
            setCategoryId(initiativeData.data.category.id);
            setInitiativeTypeId(initiativeData.data.initiative_type.id);
            setStatus(initiativeData.data.status);
            setImplementation(initiativeData.data.implementation);
        }

    }, [initiativeData]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await executeEditInitiative(initiative_id, title, description, categoryId, initiativeTypeId, status);
            navigate("/");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Edit Initiative</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                <div className='w-full flex justify-center p-10'>
                    <div className='w-full flex flex-col gap-8 divide-y divide-gray-200'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Title<span className="text-red-600"> *</span>
                                </label>
                                <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Description<span className="text-red-600"> *</span>
                                </label>
                                <textarea className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={6} required />
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Category<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="category" id="category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="">--- Please select a category ---</option>
                                    {categoryData && categoryData.results.map((category) => (
                                        <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Initiative Type<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="initiative_type" id="initiative_type" value={initiativeTypeId} onChange={(e) => setInitiativeTypeId(e.target.value)} required >
                                    <option value="">--- Please select an initiative type ---</option>
                                    {initiativeTypeData && initiativeTypeData.results.map((initiativeType) => (
                                        <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' key={initiativeType.id} value={initiativeType.id}>{initiativeType.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Status<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                                    <option value="">--- Please select a status ---</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="active">Active</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="onhold">On Hold</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="closed">Closed</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Implementation<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="status" id="status" value={implementation} onChange={(e) => setImplementation(e.target.value)} required>
                                    <option value="">--- Please select mode of implementation ---</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="internal">Internal</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="external">External</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="hybrid">Hybrid</option>
                                </select>
                            </div>

                            <div className='flex flex-row gap-4'>
                                <button className="bg-blue-500 rounded-xl px-3 py-2 w-full hover:bg-blue-700 text-white font-medium transition disabled:bg-blue-300" type="submit">Save Changes</button>
                                <button className="bg-red-500 rounded-xl px-3 py-2 w-full hover:bg-red-700 text-white font-medium transition disabled:bg-red-300" >Delete Initiative</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </>
    );
}