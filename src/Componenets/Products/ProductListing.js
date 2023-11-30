import Product from './Product';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Shimmer from '../other/Shimmer';

function ProductListing() {
    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        try {
            // const response = await axios.get('https://fakestoreapi.com/products'); // Replace with your API URL
            // setData(response.data);
            // console.log(data);
            // setLoading(false);
           await fetch('https://dummyjson.com/products')
            .then(res=>res.json())
            .then(json=>setData(json.products))
            .then(setLoading(false));
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            <div className="Products" style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
                {isloading ?
                    (
                       
                        <Shimmer/>

                    ) :
                    data.map((product) => (
                        <Product key={product.id} id={product.id} img={product.thumbnail} brand={product.brand}
                        rating={product.rating} price={product.price} name={product.title} description={product.description} />

                    ))
                }
            </div>
      </>
       
    )
}
export default ProductListing;