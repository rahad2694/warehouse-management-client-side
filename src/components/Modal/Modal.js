import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Login from '../../Login/Login';

const Modal = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className=" text-blue-600 text-sm font-semibold hover:text-orange-600 transition duration-150 ease-in-out hover:scale-105" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {user?.uid ? user?.displayName : 'Sign in'}
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{user?.uid ? user?.displayName : 'Please Enter Your Credentials'}</h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div>
                                {!user?.uid ? <Login></Login> : <div>
                                    <div className='flex justify-center my-3'>
                                        <img className='max-w-xs rounded-full hover:scale-110 transition duration-300 ease-out' src={user.photoURL} alt="" />
                                    </div>
                                    <h2>{user.email}</h2>
                                    <h3 className={`${user.emailVerified?'text-green-500':'text-red-500'}`}>{user.emailVerified?'Email Verified':'Email Not Verified'}</h3>
                                    <button onClick={() => signOut(auth)} type="button" className="px-6 mt-6 mb-2 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">Log Out</button>
                                </div>}
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
    );
};

export default Modal;