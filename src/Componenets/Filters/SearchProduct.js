import React from 'react';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/addToCartSlice';
import Product from '../Products/Product';

function SearchProduct(props) {
  const {product}=useParams();
  console.log(product);

    const[mydata,setmydata]=useState([]);
    const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${product}`)
        if (response.ok) {
          const data = await response.json();
          setmydata(data.products);
          console.log(data);
        } else {
          // Handle the case where the response is not OK (e.g., show an error message).
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    }
    fetchData();
  }, [product]);
    console.log(mydata);
    
    return mydata.length<=0?<h1>Loading...</h1>: (
        <>
        <div className="Products" style={{ display: "flex", justifyContent: "center", gap: "5rem" }}>
                {
                    mydata.map((product) => (
                        <Product key={product.id} id={product.id} img={product.image}
                         price={product.price} name={product.title} description={product.description} />

                    ))
                }
            </div>
        </>
    );
}

export default SearchProduct;