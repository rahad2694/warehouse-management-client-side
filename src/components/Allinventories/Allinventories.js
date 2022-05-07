import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import SingleItem from './SingleItem';

const Allinventories = () => {
    const [allIetms , setAllItems] = useState([]);
    useEffect(()=>{
        async function getItems(){
            try{
                toast('Loading All Items',{id:'loading'});
                const response = await axios.get('http://localhost:5000/inventories');
                setAllItems(response.data);
            }
            catch (error){
                console.log(error);
                toast.error(error.message,{id:'error-message'})
            }
        }
        getItems();
    },[]);
    console.log(allIetms);
    return (
        <div>
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