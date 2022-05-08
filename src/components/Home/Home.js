import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import SingleItem from '../Allinventories/SingleItem';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import RoundSpinner from '../RoundSpinner/RoundSpinner';

const Home = () => {
    const [allIetms, setAllItems] = useState([]);
    
    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get('https://wms-by-rahad.herokuapp.com/homeinventories');
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
        <div>
            <Carousel></Carousel>
            <div className='mx-3'>
                <h1 className='text-xl mt-4 mb-6'>Welcome to <span className='font-bold'>VitaPure</span> WMS(Warehouse Management System)</h1>

                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
                    {
                        allIetms.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                    }
                </div>

                <div className='my-10'>
                    <Link className='px-6 py-2.5 bg-yellow-400 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-400 active:shadow-lg transition duration-150 ease-in-out mt-5 cursor-pointer' to="/manageinventory">Manage All Inventories</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;