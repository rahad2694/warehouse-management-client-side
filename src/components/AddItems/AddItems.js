import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
// const axios = require('axios');
// const axios = require('axios').default;

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        data.email = user.email;
        // addItemToDB(data);
        const url = `https://wms-by-rahad.herokuapp.com/additem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => {
                // console.log(response);
                toast.success("New Item added successfully");
                e.target.reset();
            })
            .catch(err => {
                toast.error(err.message, { id: 'adding-error' });
            });
    };
    // const addItemToDB = async (newItem) => {
    //     try {
    //         const response = await axios.post('https://wms-by-rahad.herokuapp.com/additem', newItem);
    //         console.log(response);
    //         // console.log(response.status);
    //         if(response.status === 200){
    //         toast.success('Successfully Added New Item', { id: 'Success' });
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <div>
            <div className='flex justify-center align-middle my-5'>
                <img src="https://i.ibb.co/DwLNJT5/upload.jpg" alt="" />
                <h1 className='ml-2 text-xl font-bold'>Upload New Item</h1>
            </div>
            <div className='bg-orange-200 w-3/4 mx-auto p-3'>
                <form className='lg:w-3/4 mx-auto px-3 my-6 lg:py-4' onSubmit={handleSubmit(onSubmit)}>
                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Your Email' value={user?.email}
                        disabled {...register("email")} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Name' {...register("itemName", { required: true })} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Price' type='number'
                        {...register("itemPrice", { required: true, pattern: /[+]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/i })} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Picture URL' {...register("itemPic", { required: true })} />

                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Item Description' {...register("itemDescription")} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" type="number" placeholder='Item Quantity' {...register("itemQuantity", { required: true, pattern: /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/i })} />

                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3" placeholder='Supplier Name' {...register("supplierName", { required: true })} />

                    <input className="w-full px-6 py-2.5 bg-yellow-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer" type="submit" value="Upload Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;