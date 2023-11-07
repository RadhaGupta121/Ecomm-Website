import React from 'react';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Slices/addToCartSlice';
import Product from '../Products/Product';

function FilteredProduct() {
  const {name}=useParams();
  console.log(name);
    const[mydata,setmydata]=useState([]);
    const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        if (response.ok) {
          const data = await response.json();
          setmydata(data);
        } else {
          // Handle the case where the response is not OK (e.g., show an error message).
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    }
    fetchData();
  }, [name]);
    console.log(mydata);
    const dispatch = useDispatch()
  let detail={
    img:mydata.image,
    name:mydata.title,
    price:mydata.price,
    id:mydata.id
  }
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

export default FilteredProduct;