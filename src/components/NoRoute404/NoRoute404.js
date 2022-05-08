import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute404 = () => {
    return (
        <div className='my-5'>
            <div className='flex justify-center'>
                <img src="https://i.ibb.co/YWWVrN8/404.gif" alt="" />
            </div>
            <Link className='px-6 py-2.5 bg-yellow-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer' to="/">Back to HOME</Link>
        </div>
    );
};

export default NoRoute404;