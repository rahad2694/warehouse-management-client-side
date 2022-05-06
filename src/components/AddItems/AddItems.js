import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
const axios = require('axios')

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        console.log(data);
        addItemToDB(data);
    };
    const addItemToDB = (newItem)=>{
        axios.post('http://localhost:5000/additem',{newItem})
        .then(function(response){
            console.log('Success');
            toast.success('Success',{id:'Success'});
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (
        <div>
            <div className='flex justify-center align-middle my-5'>
                <img src="https://i.ibb.co/DwLNJT5/upload.jpg" alt="" />
                <h1 className='ml-2 text-xl font-bold'>Upload New Item</h1>
            </div>
            <div className='bg-orange-200 w-3/4 mx-auto p-3'>
                <form className='lg:w-3/4 mx-auto px-3 my-6 lg:py-4' onSubmit={handleSubmit(onSubmit)}>
                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Name' value={user?.email}
                        disabled {...register("email")} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Name' {...register("itemName", { required: true, maxLength: 20 })} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Price'
                        type="number" {...register("itemPrice", {required: true, pattern: /^\d+$/i })} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Picture URL' {...register("itemPic", {required: true})} />

                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Description' {...register("itemDescription")} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" type="number" placeholder='Item Quantity' {...register("itemQuantity", {required: true, pattern: /^\d+$/i })} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Supplier Name' {...register("supplierName", {required: true})} />

                    <input className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer" type="submit" value="Upload Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;