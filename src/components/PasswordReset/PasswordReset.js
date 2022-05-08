import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import RoundSpinner from '../RoundSpinner/RoundSpinner';

const PasswordReset = () => {
    const [resetMail, setResetMail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    if (sending) {
        return <RoundSpinner></RoundSpinner>
    }
    if (error) {
        toast.error(error.message, { id: 'reset-email' })
    }
    return (
        <div>
            <div>
                {/* <!-- Button trigger modal --> */}
                <button type="button" className=" text-blue-600 text-sm font-semibold hover:text-orange-600 transition duration-150 ease-in-out hover:scale-105" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Forgot Password?
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div
                            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div
                                className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel"> Please Enter Your </h5>
                                <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ">
                                <div>
                                    <input onBlur={(e) => setResetMail(e.target.value)} className='my-6 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="email" name="email" placeholder='Your Email' id="" />
                                    <div>
                                        <button onClick={async () => {
                                            if (resetMail) {
                                                await sendPasswordResetEmail(resetMail);
                                                toast.success('Sent email', { id: 'reset-mail' });
                                            } else{
                                                toast.error('No Email was provided',{id:"no-email"});
                                            }
                                        }} type="button" className="px-6 mb-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">Send Reset E-mail</button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;