import React, { useEffect, useState } from 'react';

const useNewProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://automobilereact.herokuapp.com/newitems')
        .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
};

export default useNewProduct;