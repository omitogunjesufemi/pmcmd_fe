
export default function Modal({ isOpen, closeModal, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className='fixed inset-0 z-50 flex flex-col justify-center items-center'>
                <div className='fixed inset-0 z-50 bg-white opacity-10' onClick={closeModal}></div>

                <div className='relative z-60 max-w-md p-4 mx-4 bg-white rounded-lg shadow-xl flex flex-col gap-4'>
                    <div>
                        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-400 hover:text-red-600 hover:scale-110 transition-transform">X</button>
                    </div>

                    {children}
                </div>
            </div>
        </>
    );
}
