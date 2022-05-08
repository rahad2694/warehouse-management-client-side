import React from 'react';

const CompanyTimeLine = () => {
    return (
        <div className='w-3/4 mx-auto my-5 border shadow-lg rounded-lg p-12'>
            <h1 className='text-xl font-semibold mb-6'>Upcoming Events of VitaPure:</h1>
            <ol class="border-l-2 border-blue-600">
                <li>
                    <div class="flex flex-start items-center">
                        <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                        <h4 class="text-gray-800 font-semibold text-xl -mt-2">Shipment to India</h4>
                    </div>
                    <div class="ml-6 mb-6 pb-6">
                        <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">20 May, 2022</a>
                        <p class="text-gray-700 mt-2 mb-4 w-3/4 mx-auto">The full lot of Pineapples and Strawberries will be shipped via Chittagong sea port.Shipment Documents is needed to be hand overed to the forwarder by 20th May 2022</p>
                        <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Mark Complete</button>
                    </div>
                </li>
                <li>
                    <div class="flex flex-start items-center">
                        <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                        <h4 class="text-gray-800 font-semibold text-xl -mt-2">Importing Banana Lot from Myanmar</h4>
                    </div>
                    <div class="ml-6 mb-6 pb-6">
                        <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">26 May, 2022</a>
                        <p class="text-gray-700 mt-2 mb-4 w-3/4 mx-auto">The Quantity should be confirmed and the air shipment procedure should be closed within 26th May 2022</p>
                        <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Mark Complete</button>
                    </div>
                </li>
                <li>
                    <div class="flex flex-start items-center">
                        <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                        <h4 class="text-gray-800 font-semibold text-xl -mt-2">Payment to Shanghai Agro Co.</h4>
                    </div>
                    <div class="ml-6 mb-6 pb-6">
                        <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">29 May, 2022</a>
                        <p class="text-gray-700 mt-2 mb-4 w-3/4 mx-auto">Release the fund transfer order against three proforma indexes which should be closed with approximate payable amount of $35000 by 29th May 2022</p>
                        <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Mark Complete</button>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default CompanyTimeLine;