import React, { useContext, useEffect, useState } from 'react'
import Product from '../components/Product'
import { CartClickedConext } from '../context/setCartContext';
import Cart from './Cart';

const Products = () => {
    const [productData, setproductData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { cartClicked, setCartClicked } = useContext(CartClickedConext);

    // function to fetch the product data 
    const fetchProductData = async () => {
        setLoading(true);
        await fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((data) => {
                setproductData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    // Fetch the product Data on initial Render 
    useEffect(() => {
        fetchProductData()
    }, []);

    return (
        cartClicked ? (
            <Cart />
        ) : (
            <div className='p-[16px] mx-auto container flex flex-wrap gap-[20px] justify-center'>
                {
                    loading ? (
                        <p className='text-center' > Loading...</p>
                    ) : (
                        productData.map((product, idx) => {
                            return (
                                <Product product={product} key={idx} />
                            )
                        })
                    )
                }
            </div >
        )
    )
}

export default Products