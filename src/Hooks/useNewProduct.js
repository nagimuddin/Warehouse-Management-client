import React, { useEffect, useState } from 'react';

const useNewProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://pacific-retreat-16456.herokuapp.com//newitems')
        .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
};

export default useNewProduct;