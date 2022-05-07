import React from 'react';

const SingleItem = ({item}) => {
    const {email, itemDescription, itemName, itemPic, itemPrice, itemQuantity, supplierName, _id} = item;
    // console.log(item);
    return (
        <div className='border hover:shadow-lg p-3'>
            <h1>Product Name: {itemName}</h1>
            <div className='flex justify-center'>
                <img src={itemPic} alt="" />
            </div>
            <h1>Price: {itemPrice}</h1>
            <p>Description: {itemDescription}</p>
            <h2>Stock Quantity: {itemQuantity}</h2>
            <p>Supplier: {supplierName}</p>

        </div>
    );
};

export default SingleItem;