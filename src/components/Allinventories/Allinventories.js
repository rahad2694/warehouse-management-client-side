import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import RoundSpinner from '../RoundSpinner/RoundSpinner';
import SingleItem from './SingleItem';

const Allinventories = () => {
    const [allIetms, setAllItems] = useState([]);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get('https://wms-by-rahad.herokuapp.com/inventories');
                setAllItems(response.data);
            }
            catch (error) {
                // console.log(error);
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [allIetms]);
    if (allIetms.length === 0) {
        return <RoundSpinner></RoundSpinner>
    }
    return (
        <div className='mx-3'>
            <div className='mr-2'>
                <div className='flex justify-end'>
                    <Link to="/additem" className='fixed lg:mt-5 lg:mr-4 lg:p-3 p-2 bg-transparent border-2 rounded-lg shadow-md'><span className='hover:text-red-500'>Add New Item</span></Link>
                </div>
            </div>
            <div className='flex justify-center align-middle my-5'>
                <div>
                    <img src="https://i.ibb.co/rwQnFrc/manage.jpg" alt="" />
                </div>
                <div className='my-auto'>
                    <h1 className='ml-2 text-xl font-bold'>Manage All Inventories</h1>
                </div>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
                {
                    allIetms.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>
        </div>
    );
};

export default Allinventories;