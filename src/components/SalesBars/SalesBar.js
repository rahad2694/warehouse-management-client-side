import React from 'react';

const SalesBar = () => {
    return (
        <div className='mb-4 border mx-4 pb-6'>
            <h1 className='text-2xl my-6 font-semibold'>Progess Info of 2022</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                <div className='border rounded-lg shadow-md w-2/4 mx-auto p-6 my-3'>
                    <h1 className='text-xl font-bold my-2'>Return on Investment:</h1>
                    <div className="w-full bg-gray-200 h-px mb-6">
                        <div className="bg-blue-600 h-px" style={{ "width": "85%" }}></div>
                    </div>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-blue-600 h-5" style={{ "width": "85%" }}></div>
                    </div>
                </div>
                <div className='border rounded-lg shadow-md w-2/4 mx-auto p-6 mb-3 mt-6'>
                    <h1 className='text-xl font-bold my-2'>Ship On Time:</h1>
                    <div className="w-full bg-gray-200 h-px mb-6">
                        <div className="bg-blue-600 h-px" style={{ "width": "65%" }}></div>
                    </div>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-blue-600 h-5" style={{ "width": "65%" }}></div>
                    </div>
                </div>
                <div className='border rounded-lg shadow-md w-2/4 mx-auto p-6 mb-3 mt-6'>
                    <h1 className='text-xl font-bold my-2'>Sales Target Achieved:</h1>
                    <div className="w-full bg-gray-200 h-px mb-6">
                        <div className="bg-blue-600 h-px" style={{ "width": "75%" }}></div>
                    </div>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-blue-600 h-5" style={{ "width": "75%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesBar;