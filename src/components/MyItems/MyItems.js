import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import SingleItem from '../Allinventories/SingleItem';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get(`https://wms-by-rahad.herokuapp.com/myinventories?email=${user?.email}`);
                setMyItems(response.data);
            }
            catch (error) {
                // console.log(error);
                toast.error(error.message, { id: 'error-message' })
            }
        }
        getItems();
    }, [myItems]);
    // if(myItems.length === 0){
    //     return <RoundSpinner></RoundSpinner>
    // }
    if (myItems.length === 0) {
        return <h1 className='my-32 text-xl font-bold'>No Items were Added by <br /><span className='text-green-400 hover:text-red-500'>{user?.email}</span></h1>
    }
    return (
        <div>
            <div className='mx-3'>
                <div className='flex justify-center align-middle my-5'>
                    <div>
                        <img src="https://i.ibb.co/P6WSgxx/customized.jpg" alt="" />
                    </div>
                    <div className='my-auto'>
                        <h1 className='ml-2 text-xl font-bold'>Items Added by <br /><span className='text-green-400 hover:text-red-500'>{user?.email}</span></h1>
                    </div>
                </div>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
                    {
                        myItems.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default MyItems;