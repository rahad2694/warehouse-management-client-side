import React from 'react';

const Table = () => {
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
                                        JavaScript
                                        </th>
                                        <th scope="col" className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Nodejs
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4">
                                        JavaScript is a scripting language which is used to write scripts on a website.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Nodejs is a runtime environment of JavaScript.
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        JS helps us to manipulate DOM and perform other dynamic activities on the Client side.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Nodejs helps us to use JavaScript and perform Server side activities like creating APIs, authorizing access as well as authentication etc.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                            JavaScript can use any browser engines like Spidermonkey of Firefox or V8 engine of Chrome etc.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                            Nodejs only uses the V8 engine of Chrome.
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                           Examples of JavaScript Frameworks are: 'AngularJS','TypedJS','VueJS','EmberJS' etc.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4  ">
                                        Examples of NodeJS Frameworks are: 'ExpressJS','HapiJS','MeteorJS','DerbyJS' etc.
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

export default Table;