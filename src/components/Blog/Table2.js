import React from 'react';

const Table2 = () => {
    return (
        <div className='border my-2'>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="mx-auto w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authorization
                                        </th>
                                        <th scope="col" className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authentication
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4">
                                        Authorization is the checking or allowance of any special power or access to the system.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authentication is the checking of identity verification to gain entry or access.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authorization needs Authentication first to proceed.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Authentication is done and then comes the Authorization part.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                            Example to Authorization is the CRUD access or viewing, editing, deleting and creating access.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                            Example of Authentication is checking the login credentials to allow an user in.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table2;