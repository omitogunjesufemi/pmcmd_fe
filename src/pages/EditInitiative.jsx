export default function EditInitiative() {
    return (
        <>
            <div className="p-6">
                <h1 className='text-4xl font-semibold mt-2 text-gray-800'>Edit Initiative</h1>
                <p className='uppercase flex items-center gap-2 font-mono text-xs font-medium mt-2 ml-1.5'>Monitor initiative compliance and status</p>

                <div className='w-full flex justify-center p-10'>
                    <div className='w-full flex flex-col gap-8 divide-y divide-gray-200'>
                        <form className='flex flex-col gap-5'>
                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Title<span className="text-red-600"> *</span>
                                </label>
                                <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="title" id="title" required />
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Description<span className="text-red-600"> *</span>
                                </label>
                                <textarea className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="description" id="description" rows={6} required />
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Category<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="category" id="category" required>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="">--- Please select a category ---</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="internal">Internal</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="external">External</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Initiative Type<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="initiative_type" id="initiative_type" required >
                                    <option value="">--- Please select an initiative type ---</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="internal">Internal</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="external">External</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                    Status<span className="text-red-600"> *</span>
                                </label>
                                <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="status" id="status" required>
                                    <option value="">--- Please select a status ---</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="internal">Internal</option>
                                    <option className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' value="external">External</option>
                                </select>
                            </div>

                            <div className='flex flex-row gap-4'>
                                <button className="bg-blue-500 rounded-xl px-3 py-2 w-full hover:bg-blue-700 text-white font-medium transition disabled:bg-blue-300" type="submit">Save Changes</button>
                                <button className="bg-red-500 rounded-xl px-3 py-2 w-full hover:bg-red-700 text-white font-medium transition disabled:bg-red-300" type="submit">Delete Initiative</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </>
    );
}