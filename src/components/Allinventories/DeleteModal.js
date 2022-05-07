import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteModal = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="ml-2 px-6 py-2.5 bg-red-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                REMOVE  <FontAwesomeIcon icon={faTrashCan} />
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Are you Sure to Delete?</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className='flex justify-center my-3'>
                                <div className='w-1/4 mx-auto'>
                                    <img src="https://cdn.pixabay.com/photo/2013/07/13/09/50/delete-156119__340.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" className="mr-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete <FontAwesomeIcon icon={faTrashCan} /></button>
                            <button type="button" className="px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;