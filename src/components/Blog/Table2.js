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
                                        SQL 
                                        </th>
                                        <th scope="col" className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        noSQL
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4">
                                        SQL is an RDBMS which means "Relational Database Management System".
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        NoSQL is a distributed or non-relational Database Management System.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        SQL is only Vertically Scalable.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        NoSQL is both Vertically and Horizontally Scalable.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                            SQL has fixed or predefined schema which makes it static.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        NoSQL has no fixed or predefined schema which makes it dynamic.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                            SQL is not the right choice for hierarchical data storage.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        NoSQL is the perfect choice for hierarchical data storage.
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