import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { categoryList, createInitiative, initiativeTypeList } from "../services/initiativeService";
import { useNavigate } from "react-router-dom";

export default function CreateInitiative() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [initiativeTypeId, setInitiativeTypeId] = useState('');

    const { isLoading, error, refetch: executeCreateInitiative } = useApi(createInitiative, false);
    const { data: categoryData, isLoading: isLoadingCategory, refetch: executeCategoryList } = useApi(categoryList);
    const { data: initiativeTypeData, isLoading: isLoadingInitiativeType, refetch: executeInitiativeTypeList } = useApi(initiativeTypeList);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await executeCreateInitiative(title, description, categoryId, initiativeTypeId, 'active');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Add Initiative</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                <div className='w-full flex justify-center mt-10'>
                    <div className='w-full flex flex-col gap-8 divide-y divide-gray-200'>
                        {error && <div className="p-3 bg-red-50 text-red-600 rounded-xl border-red-100 font-medium">{error}</div>}
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
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="categoryId" id="categoryId" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
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
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="initiativeTypeId" id="initiativeTypeId" value={initiativeTypeId} onChange={(e) => setInitiativeTypeId(e.target.value)} required >
                                    <option value="">--- Please select an initiative type ---</option>
                                    {initiativeTypeData && initiativeTypeData.results.map((initiativeType) => (
                                        <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' key={initiativeType.id} value={initiativeType.id}>{initiativeType.name}</option>
                                    ))}
                                </select>
                            </div>


                            <div className='flex flex-col'>
                                <button className="bg-blue-500 rounded-xl px-3 py-2 w-full hover:bg-blue-700 text-white font-medium transition disabled:bg-blue-300" disabled={isLoading} type="submit">Create</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </>
    );
}