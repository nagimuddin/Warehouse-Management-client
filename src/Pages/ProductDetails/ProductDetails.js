import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { productId } = useParams();
    const [indexNumber, itemId] = productId.split('@');
    console.log(indexNumber, itemId);
    const [product, setProduct] = useState({});
    const { _id, name, about, img, price, powerdBy, quantity, sold } = product;

    useEffect(() => {
        if (parseInt(indexNumber) === 2) {
            const url = `https://automobilereact.herokuapp.com/product/${itemId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data));
        } else if (parseInt(indexNumber) === 1) {
            const url = `https://automobilereact.herokuapp.com/newitems/${itemId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [productId]);

    function removeOne(id) {
        let newQuantity = quantity - 1;
        if (newQuantity >= 0 ) {
            let newSold = parseInt(sold) + 1;
            const newObject = { ...product, quantity: newQuantity, sold: newSold };
            setProduct(newObject);
            fetch(`https://automobilereact.herokuapp.com/update-quantity/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObject)
            })
        } else {
            toast.error('You dont have any Quantity');
        }
    }

    const addOne = (id) => {
        let newQuantity = parseInt(quantity) + 1;
        const newObject = { ...product, quantity: newQuantity };
        setProduct(newObject);
        fetch(`https://automobilereact.herokuapp.com/update-quantity/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObject)
        })
        toast.success('Added Quantity');
    }

    return (
        <>
            <div className="py-24">
                <div className="container max-w-7xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 p-4">
                            <img src={img} alt="" className="w-full h-[580px] object-cover" />
                        </div>
                        <div className="w-full lg:w-1/2 p-4">
                            <p className="text-xl font-medium flex flex-wrap gap-4"><strong>Product Id:</strong> <span className='text-md font-open text-gray-500'>{_id}</span></p>
                            <h2 className="text-3xl font-bold flex flex-wrap gap-4 mt-4"><strong>Product Name:</strong> <span>{name}</span></h2>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Powerd By:</strong> <span className='text-md font-open'>{powerdBy}</span></p>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Price:</strong> <span className='text-md font-open'>${price}</span></p>
                            <p className="text-xl text-gray-800 flex gap-4 mt-4"><strong>Product Description:</strong> <span className='text-md font-open'>{about}</span></p>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Quantity:</strong> <span className='text-md font-open'>{quantity}</span></p>
                            <p className="text-xl text-gray-800 flex flex-wrap gap-4 mt-4"><strong>Sold:</strong> <span className='text-md font-open'>{sold}</span></p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button onClick={() => addOne(_id)} className="button button-indigo">Add Quantity</button>
                                <button onClick={() => removeOne(_id)} className="button button-indigo">Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;