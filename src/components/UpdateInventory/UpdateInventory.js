import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
const axios = require('axios').default;

const UpdateInventory = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const response = async () => {
        const response = await axios.get(`http://localhost:5000/iteminfo/${id}`);
        setInfo(response.data);
    };
    useEffect(() => {
        response();
    }, [info]);
    // console.log(info);
    const { email, itemDescription, itemName, itemPic, itemPrice, itemQuantity, supplierName } = info;

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if(!data.email && !data.itemDescription && !data.itemName && !data.itemPic && !data.itemPrice && !data.itemQuantity && !data.supplierName){
            toast.error('Please edit at least one info to update the Item',{id:'updating-no-possible'});
            return;
        }
        if(!data.email){
            data.email = email;
        }
        if(!data.itemDescription){
            data.itemDescription = itemDescription;
        }
        if(!data.itemName){
            data.itemName = itemName;
        }
        if(!data.itemPic){
            data.itemPic = itemPic;
        }
        if(!data.itemPrice){
            data.itemPrice = itemPrice;
        }
        if(!data.itemQuantity){
            data.itemQuantity = itemQuantity;
        }
        if(!data.supplierName){
            data.supplierName = supplierName;
        }
        updateItemToDB(data);
    };
    const updateItemToDB = async (newItem) => {
        try {
            const response = await axios.put(`http://localhost:5000/updateinfo/${id}`, newItem);
            console.log(response);
            console.log(response.data);
            if (response.status === 200) {
                toast.success('Successfully Updated The Item', { id: 'Success' });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message,{id:'update-error'});
        }
    }
    return (
        <div>
            <div className='flex ml-1 justify-center align-middle my-5'>
                <img src="https://i.ibb.co/DwLNJT5/upload.jpg" alt="" />
                <h1 className='ml-2 text-xl font-bold'>Want to Update <span className='text-green-500 hover:text-red-500'>{itemName}</span> ?</h1>
            </div>
            <div className='bg-orange-200 w-3/4 mx-auto p-3'>
                <form className='lg:w-3/4 mx-auto px-3 my-6 lg:py-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-start ml-1'>
                        <label>Email:</label>
                    </div>
                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Your Email' defaultValue={email}
                            disabled {...register("email")} />

                    <div className='flex justify-start ml-1'>
                        <label>Name:</label>
                    </div>
                    <input  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" defaultValue={info.itemName}  placeholder='Item Name' {...register("itemName")} />

                    <div className='flex justify-start ml-1'>
                        <label>Picture:</label>
                    </div>
                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" defaultValue={itemPic} placeholder='Item Picture URL' {...register("itemPic")} />

                    <div className='flex justify-start ml-1'>
                        <label>Description:</label>
                    </div>
                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" defaultValue={itemDescription} placeholder='Item Description' {...register("itemDescription")} />

                    <div className='flex justify-start ml-1'>
                        <label>Quantity:</label>
                    </div>
                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" type="number" defaultValue={itemQuantity} placeholder='Item Quantity' {...register("itemQuantity", {pattern: /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/i })} />

                    <div className='flex justify-start ml-1'>
                        <label>Supplier:</label>
                    </div>
                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" defaultValue={supplierName} placeholder='Supplier Name' {...register("supplierName")} />

                    <input className="w-full px-6 py-2.5 bg-yellow-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer" type="submit" value="Yes Update Item" />
                </form>
            </div>
        </div>
    );
};

export default UpdateInventory;