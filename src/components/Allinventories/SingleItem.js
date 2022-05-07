import React from 'react';

const SingleItem = ({ item }) => {
    const { email, itemDescription, itemName, itemPic, itemPrice, itemQuantity, supplierName, _id } = item;
    // console.log(item);
    return (
        <div className='border hover:shadow-lg p-6'>
            <div>
                <h1><span className='text-xl font-bold my-1'>{itemName}</span></h1>
                <div className='flex justify-center'>
                    <img src={itemPic} alt="" />
                </div>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full border text-center">
                                    <thead class="border-b">
                                        <tr>
                                            <th scope="col" class="text-sm text-gray-900 px-6 py-4 border-r">
                                                Price:
                                            </th>
                                            <th scope="col" class="text-lg font-bold px-6 py-4">
                                                $<span className='text-xl'>{itemPrice}</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b">
                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 border-r">
                                                Description:
                                            </td>
                                            <td class="text-xs text-gray-900 font-light px-6 py-4  ">
                                                {itemDescription}
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 border-r">
                                                Quantity:
                                            </td>
                                            <td class="text-lg text-gray-900 font-semibold px-6 py-4">
                                                {itemQuantity}
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">

                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 border-r">
                                                Supplier:
                                            </td>
                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4">
                                                {supplierName}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <button className="mr-2 px-6 py-2.5 bg-yellow-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer">Edit</button>
                <button className="ml-2 px-6 py-2.5 bg-red-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer">Delete</button>
            </div>
        </div>
    );
};

export default SingleItem;